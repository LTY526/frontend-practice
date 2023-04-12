import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackstageTalksCloneComponent } from './backstage-talks-clone.component';

describe('BackstageTalksCloneComponent', () => {
  let component: BackstageTalksCloneComponent;
  let fixture: ComponentFixture<BackstageTalksCloneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackstageTalksCloneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackstageTalksCloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
