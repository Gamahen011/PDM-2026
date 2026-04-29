import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormatarPrecoPage } from './formatar-preco.page';

describe('FormatarPrecoPage', () => {
  let component: FormatarPrecoPage;
  let fixture: ComponentFixture<FormatarPrecoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FormatarPrecoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
