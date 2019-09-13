import { Component, OnInit } from '@angular/core';
import { WorkoutsAPIService } from '../services/workouts-api.service';
import * as _ from 'lodash';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.css']
})
export class WorkoutsComponent implements OnInit {
  public workouts = [];
  public loading = false;

  constructor(private api: WorkoutsAPIService, private modal: NgbModal) { }

  ngOnInit() {
    this.loading = true;
    this.api.getWorkouts().subscribe(data =>{
      this.workouts = data;
      this.loading = false;
    })
  }

  deleteWorkout(id, deleteModal){
    this.modal.open(deleteModal).result.then(result =>{
      this.api.deleteWorkout(id).subscribe(data => _.remove(this.workouts, { id: id}));
    }, reason => console.log(`Dismissed: ${reason}`));
  }
}
