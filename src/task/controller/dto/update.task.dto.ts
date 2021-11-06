import { IsDefined, IsEmail, IsNumber, IsOptional } from 'class-validator';

export default class UpdateTaskDto {
  @IsNumber()
  id: number;
  @IsDefined()
  title: string;
  @IsOptional()
  description: string;
  @IsDefined()
  status: string;
  @IsEmail()
  owner: string;
  @IsEmail()
  assignee: string;
  @IsNumber()
  priority: number;
  @IsOptional()
  plannedEnd: string;
}
