//import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'datnek-monorepo-post',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss',
})
export class PostComponent {

  constructor(
    private modalService: NgbModal
  ){}

  onOpenModal(eventFormModal: any){
    this.modalService.open(eventFormModal, {size: 'xl', centered: true, windowClass: 'modal-front'})
  }
}
