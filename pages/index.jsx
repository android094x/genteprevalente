import Head from "next/head";

export default function Home() {
  return (
    <div className="bg-blue-400">
      <Head>
        <title>Gente PreValente</title>
        <meta
          name="description"
          content="Gente PreValente - Prevalentware Prueba tecnica."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <h1>Gente PreValente</h1>
      </div>
    </div>
  );
}
