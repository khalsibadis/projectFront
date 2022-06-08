import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypefactureComponent } from './typefacture.component';

describe('TypefactureComponent', () => {
  let component: TypefactureComponent;
  let fixture: ComponentFixture<TypefactureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypefactureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypefactureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
