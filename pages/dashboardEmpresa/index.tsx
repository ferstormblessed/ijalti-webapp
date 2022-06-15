import Dashboard from "../../components/dashboard";
import DashboardEmpresa from "../../components/dashboardEmpresa";
import EmpresaForm from "../../components/empresaForm";
import CorpForm from "../../components/corpForm";
import LoginEmpresaScreen from "../../components/layouts/loginEmpresa";
const LoginEmpresa = () => {
  return (
    <div>
      <DashboardEmpresa>
        <CorpForm />
      </DashboardEmpresa>
    </div>
  );
};

export default LoginEmpresa;
