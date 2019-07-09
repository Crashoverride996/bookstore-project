import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BestsellingBookComponent } from './bestselling-book.component';

describe('BestsellingBookComponent', () => {
  let component: BestsellingBookComponent;
  let fixture: ComponentFixture<BestsellingBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BestsellingBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestsellingBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
