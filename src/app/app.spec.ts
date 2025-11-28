import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should have nombreCompleto signal', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.nombreCompleto()).toBeTruthy();
  });

  it('should toggle tema oscuro', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    
    const temaInicial = app.temaOscuro();
    app.toggleTema();
    expect(app.temaOscuro()).toBe(!temaInicial);
  });

  it('should change seccion activa', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    
    app.cambiarSeccion('educacion');
    expect(app.seccionActiva()).toBe('educacion');
  });

  it('should increment visitas', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    
    const visitasInicial = app.contadorVisitas();
    app.incrementarVisitas();
    expect(app.contadorVisitas()).toBe(visitasInicial + 1);
  });
});