import React from "react";

import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="container px-8 py-4 mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold py-2 text-gray-900">Dashboard</h1>
        <p className="text-gray-600">
          Bem vindo ao sistema de controle de estoque
        </p>
      </div>

      <div className="grid grid-cols-3 gap-4 min-w-full">
        <div className="grid-span-1 bg-white w-full p-2 rounded-md drop-shadow-lg">
          <div className="flex flex-col justify-between h-full">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">
                Total de Materias
              </h2>
              <p className="mt-2  lg:text-3xl font-bold text-gray-700">
                {"materiais.length"}
              </p>
            </div>
            <div className="self-end">
              <Link
                to="/"
                className="mt-4 inline-block text-sm text-blue-600 hover:text-blue-700"
              >
                Ver todos →
              </Link>
            </div>
          </div>
        </div>

        <div className="grid-span-1 bg-white w-full p-2 rounded-md drop-shadow-lg">
          <div className="flex flex-col justify-between h-full">
            <h2 className="text-lg font-semibold text-gray-900">
              Valor Total em Estoque
            </h2>
            <p className="mt-2 lg:text-3xl font-bold text-gray-700">
              {" R$ Saldo"}
            </p>
            <Link
              to="/"
              className="self-end mt-4 inline-block text-sm text-blue-600 hover:text-blue-700"
            >
              Ver todos →
            </Link>
          </div>
        </div>

        <div className="grid-span-1 bg-white w-full p-2 rounded-md drop-shadow-lg">
          <div className="flex flex-col  justify-between h-full">
            <h2 className="text-lg font-semibold text-gray-900">
              Itens em Baixa
            </h2>
            <p className="mt-2 lg:text-3xl font-bold text-gray-700">
              {"Items filtro com saldo < 10"}
            </p>
            <Link
              to="/"
              className="self-end mt-4 inline-block text-sm text-blue-600 hover:text-blue-700"
            >
              Ver todos →
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-30 grid grid-cols-2 gap-6">
        <Link
          to="/"
          className="text-center p-6 bg-blue-100 rounded-lg hover:bg-blue-200 transition-colors"
        >
          <div>
            <h3 className="text-lg font-semibold text-blue-900">
              Registrar Entrada
            </h3>
          </div>
        </Link>

        <Link
          to="/"
          className="text-center p-6 bg-blue-100 rounded-lg hover:bg-blue-200 transition-colors"
        >
          <div>
            <h3 className="text-lg font-semibold text-blue-900">
              Registrar Saida
            </h3>
          </div>
        </Link>
      </div>
    </div>
  );
}
