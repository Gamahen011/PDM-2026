import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Desafio2Page } from './desafio2.page';

describe('Desafio2Page', () => {
  let component: Desafio2Page;
  let fixture: ComponentFixture<Desafio2Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Desafio2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
