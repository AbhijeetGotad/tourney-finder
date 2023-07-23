import { Component, HostListener, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MessageModalService } from 'src/app/core/services/message-modal-service';

@Component({
  selector: 'app-add-competition-model',
  templateUrl: './add-competition-model.component.html',
  styleUrls: ['./add-competition-model.component.css'],
})
export class AddCompetitionModelComponent implements OnInit {
  choosenFiles: any = [];
  imageUrls: any = [];
  acceptedFormats: any = [];
  formatErrorString: any = '';
  formatRegex: RegExp;
  fileSizeLimit: number;
  maxSize: number;
  acceptedFileSize: any;
  maxUploadLimit: number;
  multiple: boolean = true;
  locations: any = [];

  @HostListener('dragover', ['$event']) onDragOver(evt: any) {
    evt.preventDefault();
    evt.stopPropagation();
  }

  @HostListener('dragleave', ['$event']) onDragLeave(evt: any) {
    evt.preventDefault();
    evt.stopPropagation();
  }

  @HostListener('drop', ['$event']) onDrop(evt: any) {
    evt.preventDefault();
    evt.stopPropagation();
    this.checkFormats(evt, true);
  }

  constructor(
    private modalService: MessageModalService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.createFormatRegex();
  }

  createFormatRegex() {
    let regexString = '';
    for (let i = 0; i < this.acceptedFormats.length; i++) {
      regexString = regexString + this.acceptedFormats[i];
      regexString = regexString + '|';
      if (
        i == this.acceptedFormats.length - 1 &&
        this.acceptedFormats.length != 1
      ) {
        this.formatErrorString =
          this.formatErrorString + ' or ' + this.acceptedFormats[i];
      } else if (this.acceptedFormats.length == 1) {
        this.formatErrorString = this.acceptedFormats[i];
      } else {
        this.formatErrorString =
          this.formatErrorString + this.acceptedFormats[i] + ', ';
      }
    }
    regexString = regexString.slice(0, -1);
    this.formatRegex = new RegExp(regexString, 'i');
  }

  checkFormats(evt: any, fromDrop: any) {
    let files = fromDrop ? evt.dataTransfer.files : evt.target.files;
    let formatValid = true;
    if (this.acceptedFormats.length > 0) {
      for (let i = 0; i < files.length; i++) {
        if (!this.formatRegex.test(files[i].name)) {
          this.modalService.showMessage(
            `Please upload a file with ${this.formatErrorString} format(s)`,
            'Error',
            'warning-icon',
            'Close'
          );
          formatValid = false;
          return;
        } else if (this.fileSizeLimit && files[i].size > this.fileSizeLimit) {
          this.modalService.showMessage(
            `Please upload a file with size less than ${
              this.fileSizeLimit !== 0
                ? this.fileSizeLimit / 1000000
                : this.fileSizeLimit
            } MB.`,
            'Error',
            'warning-icon',
            'Close'
          );
          formatValid = false;
          return;
        }
      }
    }
    if (this.maxSize) {
      for (let i = 0; i < files.length; i++) {
        if (files[i].size > this.acceptedFileSize) {
          this.modalService.showMessage(
            `Please upload a file with size less than ${this.maxSize}`,
            'Error',
            'warning-icon',
            'Close'
          );
          formatValid = false;
          return;
        }
      }
    }
    if (formatValid) {
      this.uploadFiles(evt, fromDrop);
    }
  }

  uploadFiles(evt: any, fromDrop: any) {
    const files = fromDrop ? evt.dataTransfer.files : evt.target.files;
    if (files.length > 0) {
      let fileLength =
        this.choosenFiles.length == 0 ? files.length : this.choosenFiles.length;
      if (this.multiple) {
        if (
          fileLength >= this.maxUploadLimit &&
          this.choosenFiles.length != 0
        ) {
          this.modalService.showMessage(
            `Cannot upload more than ${this.maxUploadLimit} file(s)`,
            'Error',
            'warning-icon',
            'Close'
          );
          return;
        } else {
          this.uploadMultipleFiles(files);
        }
      } else {
        if (fileLength >= 1 && this.choosenFiles.length != 0) {
          this.modalService.showMessage(
            'Cannot upload more than 1 file',
            'Error',
            'warning-icon',
            'Close'
          );
          return;
        } else {
          this.uploadMultipleFiles(files);
        }
      }
    }
  }

  uploadMultipleFiles(files: any) {
    for (let i = 0; i < files.length; i++) {
      this.choosenFiles.push(files[i]);
      let reader = new FileReader();
      reader.readAsDataURL(files[i]);
      reader.onloadend = (e: any) => {
        let file = this.sanitizer.bypassSecurityTrustUrl(
          e.target.result.toString()
        );
        this.imageUrls.push(file);
      };
    }
  }

  deleteFile(file: any) {
    this.modalService.showConfirmation(
      'Are you sure you want to delete the selected file?',
      'Confirmation',
      'confirmation-icon',
      (reason: any) => {
        if (reason === 'YES') {
          let fileIndex = this.choosenFiles.indexOf(file);
          this.choosenFiles.splice(fileIndex, 1);
          this.imageUrls.splice(fileIndex, 1);
        }
      }
    );
  }

  uploadExistingFiles(files: any) {
    for (let i = 0; i < files.length; i++) {
      this.choosenFiles.push(files[i]);
    }
  }
}
