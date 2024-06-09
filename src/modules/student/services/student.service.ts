import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Student } from '../schema/student.schema';
import { CreateStudentDto } from '../dto/create-student.dto';

@Injectable()
export class StudentService {

    constructor(@InjectModel('Student') private studentModel:Model<Student>) {}

    async createStudent(createStudentDto: CreateStudentDto): Promise<Student>{
        const newStudent = await new this.studentModel(createStudentDto);
        return newStudent.save();
    }

    async getAllStudents(): Promise<Student[]>{
        const studentData = await this.studentModel.find();
        if(!studentData || studentData.length == 0){
            throw new NotFoundException('Students data not found!');
        }
        return studentData;
    }
}
