import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CollegePlacement } from '../entities/college-placement.entity';
import { ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger'; // Import Swagger decorators

@Injectable()
export class CollegePlacementService {
  constructor(
    @InjectRepository(CollegePlacement)
    private collegePlacementRepository: Repository<CollegePlacement>,
  ) {}

  // Fetch average placement data for a college
  @ApiOperation({
    summary: 'Get average placement data for a college',
    description: 'Returns the average placement data (highest, average, median placements, and placement rate) for the specified college.',
  })
  @ApiParam({ name: 'collegeId', description: 'The ID of the college' })
  @ApiResponse({
    status: 200,
    description: 'Average placement data retrieved successfully.',
    type: Object, // Replace with a specific DTO or Object type that matches the response structure
  })
  async getAverageData(collegeId: number) {
    const averageData = await this.collegePlacementRepository
      .createQueryBuilder('college_placement')
      .select('AVG(college_placement.highest_placement)', 'highest_placement')
      .addSelect('AVG(college_placement.average_placement)', 'average_placement')
      .addSelect('AVG(college_placement.median_placement)', 'median_placement')
      .addSelect('AVG(college_placement.placement_rate)', 'placement_rate')
      .where('college_placement.collegeId = :collegeId', { collegeId })
      .andWhere('college_placement.highest_placement IS NOT NULL AND college_placement.highest_placement > 0')
      .andWhere('college_placement.average_placement IS NOT NULL AND college_placement.average_placement > 0')
      .andWhere('college_placement.median_placement IS NOT NULL AND college_placement.median_placement > 0')
      .andWhere('college_placement.placement_rate IS NOT NULL AND college_placement.placement_rate > 0')
      .groupBy('college_placement.collegeId')
      .getRawOne();

    return averageData;
  }

  // Fetch all placements for a specific college
  @ApiOperation({
    summary: 'Get all placement records for a college',
    description: 'Returns all placement records for the specified college, ordered by year.',
  })
  @ApiParam({ name: 'collegeId', description: 'The ID of the college' })
  @ApiResponse({
    status: 200,
    description: 'Placement records retrieved successfully.',
    type: [CollegePlacement], // Replace with specific type if needed
  })
  async getPlacements(collegeId: number) {
    const placements = await this.collegePlacementRepository
      .createQueryBuilder('college_placement')
      .where('college_placement.collegeId = :collegeId', { collegeId })
      .andWhere('college_placement.highest_placement IS NOT NULL AND college_placement.highest_placement > 0')
      .andWhere('college_placement.average_placement IS NOT NULL AND college_placement.average_placement > 0')
      .andWhere('college_placement.median_placement IS NOT NULL AND college_placement.median_placement > 0')
      .andWhere('college_placement.placement_rate IS NOT NULL AND college_placement.placement_rate > 0')
      .orderBy('college_placement.year', 'DESC')
      .getMany();

    return placements;
  }

  // Calculate placement trend (UP/DOWN)
  @ApiOperation({
    summary: 'Calculate placement trend for a college',
    description: 'Calculates the placement trend (UP or DOWN) based on the placement rates of the last two years for the specified college.',
  })
  @ApiResponse({
    status: 200,
    description: 'Placement trend calculated successfully.',
    type: String, // The return type is a trend string (UP/DOWN)
  })
  calculatePlacementTrend(placements) {
    const placementsSorted = placements.sort((a, b) => b.year - a.year);

    let trend = null;
    if (placementsSorted.length >= 2) {
      const lastYear = placementsSorted[0];
      const secondLastYear = placementsSorted[1];

      if (lastYear.placement_rate > secondLastYear.placement_rate) {
        trend = 'UP';
      } else if (lastYear.placement_rate < secondLastYear.placement_rate) {
        trend = 'DOWN';
      }
    }
    return trend;
  }

  // Combined method to fetch all data for a college
  @ApiOperation({
    summary: 'Get combined placement data for a college',
    description: 'Returns average placement data, all placement records, and the placement trend for the specified college.',
  })
  @ApiParam({ name: 'collegeId', description: 'The ID of the college' })
  @ApiResponse({
    status: 200,
    description: 'Combined placement data retrieved successfully.',
    type: Object, // Replace with a DTO or object type that represents the combined data structure
  })
  async getCollegeData(collegeId: number) {
    const averageData = await this.getAverageData(collegeId);
    const placements = await this.getPlacements(collegeId);
    const trend = this.calculatePlacementTrend(placements);

    return {
      averageData,
      placements,
      trend,
    };
  }
}
