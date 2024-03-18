import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefsListComponent } from './chefs-list.component';

describe('ChefsListComponent', () => {
  let component: ChefsListComponent;
  let fixture: ComponentFixture<ChefsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChefsListComponent]
    });
    fixture = TestBed.createComponent(ChefsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
