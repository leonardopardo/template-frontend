import MyAppLayout from "MyApp/layouts/MyAppLayout";
import MyAuthLayout from "MyApp/layouts/MyAuthLauout";
import MyErrorLayout from "MyApp/layouts/MyErrorLayout";
import ForgotPage from "MyApp/pages/auth/ForgotPage";
import LoginPage from "MyApp/pages/auth/LoginPage";
import LogoutPage from "MyApp/pages/auth/LogoutPage";
import RecoveryPage from "MyApp/pages/auth/RecoveryPage";
import RegisterPage from "MyApp/pages/auth/RegisterPage";
import RestorePage from "MyApp/pages/auth/RestorePage";
import BranchEditPage from "MyApp/pages/branch/BranchEditPage";
import BranchListPage from "MyApp/pages/branch/BranchListPage";
import BranchShowPage from "MyApp/pages/branch/BranchShowPage";
import CucicbaInmobiliariasPage from "MyApp/pages/cucicba/CucicbaInmobiliariasPage";
import CucicbaPanelPage from "MyApp/pages/cucicba/CucicbaPanelPage";
import CucicbaPropertiesPage from "MyApp/pages/cucicba/CucicbaPropertiesPage";
import CucicbaReportesPage from "MyApp/pages/cucicba/CucicbaReportesPages";
import CucicbaUsuariosPage from "MyApp/pages/cucicba/CucicbaUsuariosPage";
import DevActionPage from "MyApp/pages/developer/DevActionPage";
import DevLogPage from "MyApp/pages/developer/DevLogPage";
import Error404Page from "MyApp/pages/errors/Error404Page";
import Error500Page from "MyApp/pages/errors/Error500Page";
import FaqPage from "MyApp/pages/help/FaqPage";
import TutorialsPage from "MyApp/pages/help/TutorialsPage";
import EstadisticasPage from "MyApp/pages/home/EstadisticasPage";
import PrincipalPage from "MyApp/pages/home/PrincipalPage";
import MessagesListPage from "MyApp/pages/mensajes/MessagesListPage";
import NotificationListPage from "MyApp/pages/notification/NotificationListPage";
import PropertyInterestedPage from "MyApp/pages/property/PropertyInterestedPage";
import PropertyListPage from "MyApp/pages/property/PropertyListPage";
import PropertySharedPage from "MyApp/pages/property/PropertySharePage";
import RoleListPage from "MyApp/pages/role/RoleListPage";
import UserCreatePage from "MyApp/pages/user/UserEditPage";
import UserEditPage from "MyApp/pages/user/UserEditPage";
import UserListPage from "MyApp/pages/user/UserListPage";

import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<MyAuthLayout />}>
          <Route path="forgot" element={<ForgotPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="logout" element={<LogoutPage />} />
          <Route path="recovery" element={<RecoveryPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="restore" element={<RestorePage />} />
        </Route>
        <Route element={<MyAppLayout />}>
          <Route path="/sucursales">
            <Route path="listar" element={<BranchListPage />} />
            <Route path="editar/:id" element={<BranchEditPage />} />
          </Route>
          <Route path="/">
            <Route path="principal" element={<PrincipalPage />} />
            <Route path="estadisticas" element={<EstadisticasPage />} />
          </Route>
          <Route path="/mensajes">
            <Route path="list" element={<MessagesListPage />} />
          </Route>
          <Route path="/propiedades">
            <Route path="listar" element={<PropertyListPage />} />
            <Route path="compartidas/listar" element={<PropertySharedPage />} />
            <Route path="interesados" element={<PropertyInterestedPage />} />
          </Route>
          <Route path="/inmobiliaria">
            <Route path="ver/:id" element={<BranchShowPage />} />
          </Route>
          <Route path="/usuarios">
            <Route path="listar" element={<UserListPage />}></Route>
            <Route path="crear" element={<UserCreatePage />}></Route>
            <Route path="editar/:id" element={<UserEditPage />}></Route>
          </Route>
          <Route path="/roles">
            <Route path="listar" element={<RoleListPage />}></Route>
          </Route>
          <Route path="/notificaciones">
            <Route path="listar" element={<NotificationListPage />} />
          </Route>
          <Route path="/ayuda">
            <Route path="tutoriales" element={<TutorialsPage />} />
            <Route path="faqs" element={<FaqPage />} />
          </Route>
          <Route path="/cucicba">
            <Route path="panel" element={<CucicbaPanelPage />} />
            <Route path="propiedades" element={<CucicbaPropertiesPage />} />
            <Route path="usuarios" element={<CucicbaUsuariosPage />} />
            <Route
              path="inmobiliarias"
              element={<CucicbaInmobiliariasPage />}
            />
            <Route path="reportes" element={<CucicbaReportesPage />} />
          </Route>
          <Route path="/dev">
            <Route path="logs" element={<DevLogPage />} />
            <Route path="actions" element={<DevActionPage />} />
          </Route>
        </Route>
        <Route path="/errors" element={<MyErrorLayout />}>
          <Route path="404" element={<Error404Page />} />
          <Route path="500" element={<Error500Page />} />
        </Route>

        <Route path="*" element={<Navigate to="/errors/404" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MyRoutes;
