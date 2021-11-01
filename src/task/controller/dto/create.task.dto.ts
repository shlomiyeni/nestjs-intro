import { IsDefined, IsEmail, IsNumber, IsOptional } from 'class-validator';

export default class CreateTaskDto {
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
