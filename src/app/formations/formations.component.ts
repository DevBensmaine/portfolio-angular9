import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../shared/api/data-service.service';
import { IProfil } from '../Profil';

@Component({
  selector: 'app-formations',
  templateUrl: './formations.component.html',
  styleUrls: ['./formations.component.css']
})
export class FormationsComponent implements OnInit {
  resulat: IProfil[] = [];
  errorMessage = '';
  formations: any = {};

  constructor(private dataService: DataServiceService) { }

  ngOnInit(): void {
    this.dataService.getAllInformation().subscribe({
      next: (data) => {
        this.resulat = data;
        this.formations = this.resulat[0]['formations'];
      },
      error: (err) => (this.errorMessage = err),
    });
  }

}
