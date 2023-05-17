export const dashboardRoutes = {
  label: "Panel Principal",
  labelDisable: false,
  children: [
    {
      name: "Panel Principal",
      active: true,
      icon: "chart-pie",
      children: [
        {
          name: "Resumen",
          to: "/principal",
          exact: true,
          active: true,
        },
        {
          name: "Estadísticas",
          to: "/estadisticas",
          exact: true,
          active: true,
        },
      ],
    },
  ],
};

export const propertiesRoutes = {
  label: "Propiedades",
  labelDisable: false,
  children: [
    {
      name: "Propiedades",
      active: true,
      icon: "home",
      children: [
        {
          name: "Mis Publicaciones",
          to: "/propiedades/listar",
          exact: true,
          active: true,
        },
        {
          name: "Compartidas",
          to: "/propiedades/compartidas/listar",
          exact: true,
          active: true,
        },
        {
          name: "Interesados",
          to: "/propiedades/interesados",
          exact: true,
          active: true,
        },
      ],
    },
  ],
};

export const settingsRoutes = {
  label: "Configuración",
  labelDisable: false,
  children: [
    {
      name: "Configuración",
      active: true,
      icon: "cog",
      children: [
        {
          name: "Mi Inmobiliaria",
          to: "/inmobiliaria/ver/:id",
          exact: true,
          active: true,
        },
        {
          name: "Mis Usuarios",
          to: "/usuarios/listar",
          exact: true,
          active: true,
        },
        {
          name: "Mis Permisos",
          to: "/roles/listar",
          exact: true,
          active: true,
        },
        {
          name: "Mis Notificaciones",
          to: "/notificaciones/listar",
          exact: true,
          active: true,
        },
      ],
    },
  ],
};

export const helpRoutes = {
  label: "Ayuda",
  labelDisable: false,
  children: [
    {
      name: "Ayuda",
      active: true,
      icon: "info-circle",
      children: [
        {
          name: "Tutoriales",
          to: "/ayuda/tutoriales",
          exact: true,
          active: true,
        },
        {
          name: "Faqs",
          to: "/ayuda/faqs",
          exact: true,
          active: true,
        },
      ],
    },
  ],
};

export const cucicbaRoutes = {
  label: "CUCICBA",
  labelDisable: false,
  children: [
    {
      name: "CUCICBA",
      active: true,
      icon: "lock",
      children: [
        {
          name: "Panel Principal",
          to: "/cucicba/panel",
          exact: true,
          active: true,
        },
        {
          name: "Propiedades",
          to: "/cucicba/propiedades",
          exact: true,
          active: true,
        },
        {
          name: "Usuarios",
          to: "/cucicba/usuarios",
          exact: true,
          active: true,
        },
        {
          name: "Inmobiliarias",
          to: "/cucicba/inmobiliarias",
          exact: true,
          active: true,
        },
        {
          name: "Reportes",
          to: "/cucicba/reportes",
          exact: true,
          active: true,
        },
      ],
    },
  ],
};

export const webmasterRoutes = {
  label: "Webmaster",
  labelDisable: false,
  children: [
    {
      name: "Development",
      active: true,
      icon: "code",
      children: [
        {
          name: "Log",
          to: "/dev/logs",
          exact: true,
          active: true,
        },
        {
          name: "Acciones",
          to: "/dev/actions",
          exact: true,
          active: true,
        },
      ],
    },
  ],
};

export default [
  dashboardRoutes,
  propertiesRoutes,
  settingsRoutes,
  helpRoutes,
  cucicbaRoutes,
  webmasterRoutes,
];
