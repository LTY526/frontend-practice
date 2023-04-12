import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbstractCloneComponent } from './abstract-clone.component';

describe('AbstractCloneComponent', () => {
  let component: AbstractCloneComponent;
  let fixture: ComponentFixture<AbstractCloneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbstractCloneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbstractCloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
