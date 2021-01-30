import AppLayout from './components/Shared/AppLayout';
import SpareMovementForm from './components/SpareMovement/SpareMovementForm';
import SpareMovementFormRHF from './components/SpareMovement/SpareMovementFormRHF';

const App = () => {
  return (
    <AppLayout>
      <SpareMovementForm />
      <SpareMovementFormRHF />
    </AppLayout>
  );
};

export default App;
