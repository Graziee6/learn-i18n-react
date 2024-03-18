import { Suspense } from "react";
import { useTranslation } from "react-i18next";

function App() {

  const {t, i18n} = useTranslation()
  return (
    <div>
      <h1>{t('main.header')}</h1>
    </div>
  );
}

export default function WrappedApp(props) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <App/>
    </Suspense>
  );
}
