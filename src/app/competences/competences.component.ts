import { Component, OnInit } from '@angular/core';
import { IProfil } from '../Profil';
import { DataServiceService } from '../shared/api/data-service.service';

@Component({
  selector: 'app-competences',
  templateUrl: './competences.component.html',
  styleUrls: ['./competences.component.css']
})
export class CompetencesComponent implements OnInit {

  resulat: IProfil[] = [];
  errorMessage = '';
  skills: any = {};
  workflow: any = {};

  constructor(private dataService: DataServiceService) { }

  ngOnInit(): void {
    this.dataService.getAllInformation().subscribe({
      next: (data) => {
        this.resulat = data;
        this.skills = this.resulat[0]['skills'];
        this.workflow = this.resulat[0]['workflow'];

      },
      error: (err) => (this.errorMessage = err),
    });
  }

}
