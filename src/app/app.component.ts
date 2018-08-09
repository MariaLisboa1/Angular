import { Component } from '@angular/core';
import { Student } from "./student/student.model";
import * as schedule from 'node-schedule';

@Component({
  selector: 'jad-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  students: Student[] = [
    { name: 'Luke', isJedi: true, temple: 'Coruscant' },
    { name: 'Leia', isJedi: false },
    { name: 'Han Solo', isJedi: false }
  ]

  ngOnInit(){
    var j = schedule.scheduleJob('0 17 ? * 0,4-6', function(){
      console.log('Today is recognized by Rebecca Black!');
    });

    var j = schedule.scheduleJob('0 1 * * *', function(fireDate){
      console.log('This job was supposed to run at ' + fireDate + ', but actually ran at ' + new Date());
    });
  }
}
