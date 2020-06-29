import { Component, OnInit } from '@angular/core';
import { IProfil } from '../Profil';
import { DataServiceService } from '../shared/api/data-service.service';

@Component({
  selector: 'app-interets',
  templateUrl: './interets.component.html',
  styleUrls: ['./interets.component.css']
})
export class InteretsComponent implements OnInit {

  resulat: IProfil[] = [];
  errorMessage = '';
  interest: any = {};


  constructor(private dataService: DataServiceService) { }

  ngOnInit(): void {

    this.dataService.getAllInformation().subscribe({
      next: (data) => {
        this.resulat = data;
        this.interest = this.resulat[0]['interts'];
      },
      error: (err) => (this.errorMessage = err),
    });

  }

}
