import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchtableComponent } from './searchtable.component';

describe('SearchtableComponent', () => {
  let component: SearchtableComponent;
  let fixture: ComponentFixture<SearchtableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchtableComponent]
    });
    fixture = TestBed.createComponent(SearchtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
