import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-coursel-header',
  templateUrl: './coursel-header.component.html',
  styleUrls: ['./coursel-header.component.scss']
})
export class CourselHeaderComponent implements OnInit {
  @Output() viewSelected: EventEmitter<string> = new EventEmitter<string>();
  @Output() animationType: EventEmitter<string> = new EventEmitter<string>();
  isPresentation = false;
  animationForm: FormGroup = this.getFormGroup();
  constructor(private fb: FormBuilder) {}

  ngOnInit() {}
  updateView() {
    this.isPresentation = !this.isPresentation;
    this.isPresentation
      ? this.viewSelected.emit('grid')
      : this.viewSelected.emit('presentation');
  }
  getFormGroup() {
    return this.fb.group({
      animationType: ['presentation', []]
    });
  }
  onAnimationType(animation: string) {
    if (animation) {
      this.animationType.emit(animation);
    }
  }
}
