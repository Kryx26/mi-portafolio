import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Educacion {
  titulo: string;
  institucion: string;
  anio: string;
  descripcion: string;
}

interface Habilidad {
  nombre: string;
  nivel: number;
  categoria: string;
}

interface Proyecto {
  nombre: string;
  descripcion: string;
  tecnologias: string[];
  enlace: string;
  imagen: string;
  caracteristicas: string[];
  estado: string;
  fecha: string;
  repositorio: string;
  demo?: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  
  nombreCompleto = signal<string>('Camilo Andres Perez Soto');
  temaOscuro = signal<boolean>(false);
  seccionActiva = signal<string>('inicio');
  contadorVisitas = signal<number>(1247);
  filtroHabilidad = signal<string>('todas');
  mensajeContacto = signal<string>('');
  mostrarDetalles = signal<boolean>(false);
  proyectoSeleccionado = signal<number>(-1);

  datosPersonales = {
    email: 'kryx2627@gmail.com',
    telefono: '+57 302 116 9846',
    ubicacion: 'Cartagena, Bolivar - Colombia',
    linkedin: 'linkedin.com/in/camilo-perez-soto',
    github: 'github.com/Kryx26',
    descripcion: 'Tecnologo en Sistemas de 25 años, apasionado por el desarrollo web y las nuevas tecnologias. Me especializo en tecnologias como Angular, TypeScript y desarrollo de aplicaciones modernas. Actualmente cursando mi tecnologia en Unitecnar.',
    foto: 'assets/images/perfil.jpg'
  };

  educacion: Educacion[] = [
    {
      titulo: 'Tecnologia en Sistemas',
      institucion: 'Unitecnar',
      anio: '2023 - 2025',
      descripcion: 'Formacion tecnologica enfocada en desarrollo de software, bases de datos y tecnologias web modernas.'
    },
    {
      titulo: 'Curso de Angular',
      institucion: 'Formacion Complementaria',
      anio: '2024',
      descripcion: 'Desarrollo de aplicaciones web con Angular 17+, Signals y TypeScript.'
    },
    {
      titulo: 'Bachiller Academico',
      institucion: 'Institucion Educativa Republica del Libano',
      anio: '2012 - 2018',
      descripcion: 'Educacion secundaria completada con enfasis en ciencias y tecnologia.'
    }
  ];

  habilidades: Habilidad[] = [
    { nombre: 'Angular', nivel: 85, categoria: 'frontend' },
    { nombre: 'TypeScript', nivel: 80, categoria: 'frontend' },
    { nombre: 'HTML/CSS', nivel: 90, categoria: 'frontend' },
    { nombre: 'JavaScript', nivel: 85, categoria: 'frontend' },
    { nombre: 'Bootstrap', nivel: 75, categoria: 'frontend' },
    { nombre: 'Node.js', nivel: 70, categoria: 'backend' },
    { nombre: 'Python', nivel: 65, categoria: 'backend' },
    { nombre: 'SQL', nivel: 80, categoria: 'backend' },
    { nombre: 'MySQL', nivel: 75, categoria: 'backend' },
    { nombre: 'Git', nivel: 85, categoria: 'herramientas' },
    { nombre: 'GitHub', nivel: 85, categoria: 'herramientas' },
    { nombre: 'VS Code', nivel: 90, categoria: 'herramientas' }
  ];

  proyectos: Proyecto[] = [
    {
      nombre: 'Portafolio Personal',
      descripcion: 'Sitio web personal desarrollado con Angular 17+ y Signals para mostrar mi informacion profesional y academica.',
      tecnologias: ['Angular', 'TypeScript', 'CSS', 'Signals'],
      imagen: 'https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?w=400&h=250&fit=crop',
      caracteristicas: [
        '✅ Diseño responsive y moderno',
        '✅ Modo claro/oscuro con Signals',
        '✅ Navegación dinámica entre secciones',
        '✅ Formulario de contacto interactivo',
        '✅ Filtrado de habilidades por categoría',
        '✅ Timeline animado de educación',
        '✅ Despliegue en Railway',
        '✅ Optimizado para SEO'
      ],
      estado: '✅ Completado',
      fecha: 'Enero 2025',
      repositorio: 'https://github.com/Kryx26/mi-portafolio',
      enlace: 'https://github.com/Kryx26/mi-portafolio',
      demo: '#'
    },
    {
      nombre: 'Sistema de Gestión',
      descripcion: 'Aplicación web para gestionar inventarios y registros con base de datos MySQL y autenticación de usuarios.',
      tecnologias: ['Angular', 'Node.js', 'MySQL', 'Bootstrap', 'Express'],
      imagen: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=250&fit=crop',
      caracteristicas: [
        '📦 CRUD completo de productos',
        '👥 Sistema de autenticación JWT',
        '📊 Dashboard con estadísticas en tiempo real',
        '🔍 Búsqueda y filtrado avanzado',
        '📄 Generación de reportes PDF',
        '💾 Base de datos relacional MySQL',
        '🔐 Control de roles y permisos',
        '📱 Interfaz responsive con Bootstrap'
      ],
      estado: '🚧 En desarrollo (75%)',
      fecha: 'Diciembre 2024 - Presente',
      repositorio: 'https://github.com/Kryx26',
      enlace: 'https://github.com/Kryx26'
    },
    {
      nombre: 'Calculadora Web',
      descripcion: 'Calculadora funcional con operaciones básicas y avanzadas, interfaz responsive y temas personalizables.',
      tecnologias: ['HTML', 'CSS', 'JavaScript', 'Vanilla JS'],
      imagen: 'https://images.unsplash.com/photo-1587145820266-a5951ee6f620?w=400&h=250&fit=crop',
      caracteristicas: [
        '➕ Operaciones básicas (+, -, ×, ÷)',
        '📐 Funciones científicas (sin, cos, tan, √)',
        '🎨 Múltiples temas de color',
        '⌨️ Soporte de teclado numérico',
        '📝 Historial de operaciones',
        '🔄 Función de memoria (M+, M-, MR, MC)',
        '📱 100% responsive',
        '⚡ Cero dependencias externas'
      ],
      estado: '✅ Completado',
      fecha: 'Noviembre 2024',
      repositorio: 'https://github.com/Kryx26',
      enlace: 'https://github.com/Kryx26',
      demo: '#calculadora-demo'
    }
  ];

  clasesTema = computed(() => {
    return this.temaOscuro() ? 'tema-oscuro' : 'tema-claro';
  });

  habilidadesFiltradas = computed(() => {
    const filtro = this.filtroHabilidad();
    if (filtro === 'todas') {
      return this.habilidades;
    }
    return this.habilidades.filter(h => h.categoria === filtro);
  });

  totalHabilidadesMostradas = computed(() => {
    return this.habilidadesFiltradas().length;
  });

  promedioHabilidades = computed(() => {
    const habs = this.habilidadesFiltradas();
    if (habs.length === 0) return 0;
    const suma = habs.reduce((acc, h) => acc + h.nivel, 0);
    return Math.round(suma / habs.length);
  });

  toggleTema(): void {
    this.temaOscuro.update(valor => !valor);
  }

  cambiarSeccion(seccion: string): void {
    this.seccionActiva.set(seccion);
  }

  incrementarVisitas(): void {
    this.contadorVisitas.update(v => v + 1);
  }

  cambiarFiltro(filtro: string): void {
    this.filtroHabilidad.set(filtro);
  }

  toggleDetalles(): void {
    this.mostrarDetalles.update(valor => !valor);
  }

  seleccionarProyecto(index: number): void {
    if (this.proyectoSeleccionado() === index) {
      this.proyectoSeleccionado.set(-1);
    } else {
      this.proyectoSeleccionado.set(index);
    }
  }

  enviarMensaje(): void {
    if (this.mensajeContacto().trim()) {
      alert('¡Gracias por tu mensaje! Te contactare pronto.\n\nMensaje: ' + this.mensajeContacto());
      this.mensajeContacto.set('');
    }
  }

  getColorNivel(nivel: number): string {
    if (nivel >= 80) return '#4CAF50';
    if (nivel >= 60) return '#FFC107';
    return '#FF5722';
  }

  getIconoCategoria(categoria: string): string {
    const iconos: { [key: string]: string } = {
      'frontend': '🎨',
      'backend': '⚙️',
      'herramientas': '🔧'
    };
    return iconos[categoria] || '📚';
  }
}