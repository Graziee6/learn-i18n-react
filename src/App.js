import { Suspense, useState } from "react";
import { useTranslation } from "react-i18next";
import { DateTime } from "luxon";

const locales = {
  en: { title: "English" },
  fr: { title: "French" },
};

function App() {
  const { t, i18n } = useTranslation();
  const [messages, setMessages] = useState(0);

  return (
    <div>
      <ul
        style={{
          display: "flex",
          listStyleType: "none",
          justifyContent: "flex-start",
        }}
      >
        {Object.keys(locales).map((l) => (
          <li key={l}>
            <button
              style={{
                fontWeight: i18n.resolvedLanguage === l ? "bold" : "normal",
              }}
              type="submit"
              onClick={() => i18n.changeLanguage(l)}
            >
              {locales[l].title}
            </button>
          </li>
        ))}
      </ul>
      <h1>{t("main.header")}</h1>

      <button onClick={() => setMessages(messages + 1)}>+1 message</button>

      <p>{t("main.new_messages", { count: messages })}</p>

      <p>{t("main.current_date", { date: new Date() })}</p>

      <p>
        {t("main.incoming_message", { from: "Ann" })} <br /> She writes:{" "}
        {t("main.message_contents", {
          body: "How are you doing?",
          context: "female",
        })}
      </p>

      <p>{t('main.new_key')}</p>
    </div>
  );
}

export default function WrappedApp() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <App />
    </Suspense>
  );
}
