import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounriesComponent } from './counries.component';

describe('CounriesComponent', () => {
  let component: CounriesComponent;
  let fixture: ComponentFixture<CounriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
