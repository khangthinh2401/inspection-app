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
    // for mapping inspection type name from inspection type id (the second column in show inspection table)
    inspectionTypesList: any = [];

    // map to display data associated with foreign keys
    inspectionTypesMap: Map<number, string> = new Map();

    // call api service
    constructor(private service: InspectionApiService) { }

    ngOnInit(): void {
        this.inspectionList$ = this.service.getInspectionList();
        this.inspectionTypesList$ = this.service.getInspectionTypesList();

        // render inspection type name from inspection type id
        this.refreshInspectionTypesMap();
    }

    //variables:
    modalTitle: string = '';
    activateAddEditInspectionComponent: boolean = false;
    inspection: any;

    // open page for adding
    modalAdd() {
        this.inspection = {
            id: 0,
            status: null,
            comments: null,
            inspectionTypeId: null
        }
        this.modalTitle = "Add Inspection";
        this.activateAddEditInspectionComponent = true;
    }

    // open page for updating
    modalUpdate(inspection: any) {
        this.inspection = inspection;
        this.modalTitle = "Update inspection";
        this.activateAddEditInspectionComponent = true;
    }

    modalClose() {
        this.activateAddEditInspectionComponent = false;
        this.inspectionList$ = this.service.getInspectionList();
    }

    modalDelete(id: number) {
        this.service.deleteInspection(id).subscribe(res => {
            // show success message
            var showAddSuccess = document.getElementById('delete-success-alert');
            if (showAddSuccess) {
                showAddSuccess.style.display = "block";
            }
            this.inspectionList$ = this.service.getInspectionList();
            setTimeout(() => {
                if (showAddSuccess) {
                    showAddSuccess.style.display = "none";
                }
            }, 4000)
        })
    }

    refreshInspectionTypesMap() {
        this.service.getInspectionTypesList().subscribe(data => {
            this.inspectionTypesList = data;

            for (let i = 0; i < data.length; i++) {
                // map inspection type id to inspection type name
                this.inspectionTypesMap.set(this.inspectionTypesList[i].id, this.inspectionTypesList[i].inspectionName);
            }
        })
    }

}
