import { Component, OnInit } from '@angular/core';
import { InspectionApiService } from "../../inspection-api.service";
import { Observable } from "rxjs";

@Component({
    selector: 'app-show-inspection',
    templateUrl: './show-inspection.component.html',
    styleUrls: ['./show-inspection.component.css']
})
export class ShowInspectionComponent implements OnInit {

    inspectionList$!: Observable<any[]>;
    inspectionTypesList$!: Observable<any[]>;
    inspectionTypesList: any = [];

    // map to display data associated with foreign keys
    inspectionTypesMap: Map<number, string> = new Map();

    // call api service
    constructor(private service: InspectionApiService) { }

    ngOnInit(): void {
        // call getInspectionList() function of service
        // assign returned data into inspectionList$
        this.inspectionList$ = this.service.getInspectionList();
    }

}
