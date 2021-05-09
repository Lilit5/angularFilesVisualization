import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

// we can generate a component automatically by cli. using: ng g c course

@Component({
    selector: 'courses',
    template: `
    <h2>Courses !!!!!!!!! {{ getTitle() }}</h2>
    <ul>
        <li *ngFor="let course of courses">
            {{ course }}
        </li>
    </ul>
    `
})
export class CoursesComponent {
    title = "List of courses heeeeeeeeeeere"
    courses;

    getTitle () {
        return this.title;
    }
    // courses = ["course1", "course2", "course3"];
    

    constructor (service: CoursesService) {
        // let service = new CoursesService(); // alternative to create instansce of service is to pass an argument to constructor
        // this way we avoid creating new instance of class everytime we need it anywhere in application
        this.courses = service.getCourses();
    }
}