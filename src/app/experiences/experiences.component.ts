import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../shared/api/data-service.service';

import { IProfil } from '../Profil';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css']
})
export class ExperiencesComponent implements OnInit {
  resulat: IProfil[] = [];
  errorMessage = '';
  experiences: any = {};

  constructor(private dataService: DataServiceService) { }

  ngOnInit(): void {
    this.dataService.getAllInformation().subscribe({
      next: (data) => {
        this.resulat = data;
        this.experiences = this.resulat[0]['experiences'];
      },
      error: (err) => (this.errorMessage = err),
    });
  }

}
