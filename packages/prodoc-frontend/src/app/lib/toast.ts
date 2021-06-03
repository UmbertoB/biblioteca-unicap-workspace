import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({ providedIn: 'root' })
export class Toast {

    constructor(private toastrService: ToastrService) { }

    public success(text: string, icon: string = 'nc-check-2'): void {
        this.toastrService.success(
            `<span data-notify="icon" class="nc-icon ${icon}">
            </span>
            <span data-notify="message">
                ${text}
            </span>`,
            "",
            {
                timeOut: 4000,
                closeButton: true,
                enableHtml: true,
                toastClass: "alert alert-success alert-with-icon",
                positionClass: "toast-top-right"
            }
        );
    }

    public warning(text: string, icon: string = 'nc-bell-55'): void {
        this.toastrService.warning(
            `<span data-notify="icon" class="nc-icon ${icon}">
            </span>
            <span data-notify="message">
                ${text}
            </span>`,
            "",
            {
                timeOut: 4000,
                closeButton: true,
                enableHtml: true,
                toastClass: "alert alert-warning alert-with-icon",
                positionClass: "toast-top-right"
            }
        );
    }

    public danger(text: string, icon: string = 'nc-simple-remove'): void {
        this.toastrService.success(
            `<span data-notify="icon" class="nc-icon ${icon}">
            </span>
            <span data-notify="message">
                ${text}
            </span>`,
            "",
            {
                timeOut: 4000,
                closeButton: true,
                enableHtml: true,
                toastClass: "alert alert-danger alert-with-icon",
                positionClass: "toast-top-right",
            }
        );
    }

}