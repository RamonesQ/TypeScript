using System;
using System.Collections.Generic;
using System.Linq;

namespace HackerRankMercadoLivre
{
    class Program
    {
        static void Main(string[] args)
        {
            int maxDigit = 6;

            List<int> numeros = calculation(maxDigit);
            numeros.ForEach(f => { Console.WriteLine(f); });
            Console.Read();
        }

        private static List<int> calculation(int maxDigit)
        {
            List<int> lista = new(1);

           
            for (int numeroGerado = 1000; numeroGerado <= 7770; numeroGerado++)
            {
                string numeroGeradoString = numeroGerado.ToString();
                List<int> digitosDoNumeroGerado = new(4);

                for (int y = 0; y < numeroGerado.ToString().Length; y++)
                    digitosDoNumeroGerado.Add(Convert.ToInt32(numeroGeradoString.Substring(y, 1)));

                if (digitosDoNumeroGerado.Max() > maxDigit)
                    continue;

                int soma = 0;
                for (int n = 0; n < numeroGerado.ToString().Length; n++)
                    soma += Convert.ToInt32(numeroGeradoString.Substring(n, 1));

                if (soma == 21)
                    lista.Add(numeroGerado);
            }

            return lista.Any() ? lista : null;
        }
    }
}