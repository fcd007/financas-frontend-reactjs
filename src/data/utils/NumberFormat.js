export function formatarEmRealBrasileiro(number) {

  return  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(number);
}