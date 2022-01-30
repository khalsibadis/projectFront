import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UapdateFactureComponent } from './uapdate-facture.component';

describe('UapdateFactureComponent', () => {
  let component: UapdateFactureComponent;
  let fixture: ComponentFixture<UapdateFactureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UapdateFactureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UapdateFactureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
