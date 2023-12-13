import { Injectable, NotFoundException } from '@nestjs/common';
import { UserHealthService } from 'src/user-health/user-health.service';

@Injectable()
export class NutritionRecommenderService {

    constructor(
        private userHealthService: UserHealthService
    ){}

    async getDailyCaloriesRecommendation(userId: number){
        const userHealth = await this.userHealthService.userHealth(userId)
        if(!userHealth.gender || !userHealth.weight || !userHealth.age || !userHealth.height){
            throw new NotFoundException("User data is not enough to calculate recommendation")
        }

        


    }

}
