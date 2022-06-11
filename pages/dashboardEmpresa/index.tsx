import Dashboard from "../../components/dashboard";
import DashboardEmpresa from "../../components/dashboardEmpresa"
import ProfileUser from "../../components/profile";
import EmpresaForm from "../../components/empresaForm";
import LoginEmpresaScreen from "../../components/layouts/loginEmpresa";
const LoginEmpresa = () => {
  return (
    <div>
     <DashboardEmpresa>
        <EmpresaForm/>
      </DashboardEmpresa>
        
    </div>
  );
};

export default LoginEmpresa;