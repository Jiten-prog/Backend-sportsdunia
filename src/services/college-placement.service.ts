// src/services/college-placement.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CollegePlacement } from '../entities/college-placement.entity';

@Injectable()
export class CollegePlacementService {
  constructor(
    @InjectRepository(CollegePlacement)
    private collegePlacementRepository: Repository<CollegePlacement>,
  ) {}

  // Fetch average placement data
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

  // Fetch all placements for a college
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
