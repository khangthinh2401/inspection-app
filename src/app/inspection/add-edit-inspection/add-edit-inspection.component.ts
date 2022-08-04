import { Component, Input, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { InspectionApiService } from "../../inspection-api.service";

@Component({
    selector: 'app-add-edit-inspection',
    templateUrl: './add-edit-inspection.component.html',
    styleUrls: ['./add-edit-inspection.component.css']
})
export class AddEditInspectionComponent implements OnInit {

    inspectionList$!: Observable<any[]>;
    statusList$!: Observable<any[]>;
    inspectionTypesList$!: Observable<any[]>;

    constructor(private service: InspectionApiService) { }

    ngOnInit(): void {
        this.id = this.inspection.id;
        this.status = this.inspection.status;
        this.comments = this.inspection.comments;
        this.inspectionTypeId = this.inspection.inspectionTypeId;

        this.statusList$ = this.service.getStatusList();
        this.inspectionList$ = this.service.getInspectionList();
        this.inspectionTypesList$ = this.service.getInspectionTypesList();
    }

    @Input() inspection: any;
    id: number = 0;
    status: string = "";
    comments: string = "";
    inspectionTypeId!: number;

    addInspection() {
        var inspection = {
            inspectionTypeId: this.inspectionTypeId,
            status: this.status,
            comments: this.comments
        }
        this.service.addInspection(inspection).subscribe(res => {
            var closeModalBtn = document.getElementById('add-edit-modal-close');
            if (closeModalBtn) {
                closeModalBtn.click();
            }

            var showAddSuccess = document.getElementById('add-success-alert');
            if (showAddSuccess) {
                showAddSuccess.style.display = "block";
            }
            setTimeout(function () {
                if (showAddSuccess) {
                    showAddSuccess.style.display = "none";
                }
            }, 4000)
        })
    }
    updateInspection() {

    }
}
