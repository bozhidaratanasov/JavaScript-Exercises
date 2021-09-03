function systemComponents(input) {
  const register = {};
  for (const item of input) {
    let[system, component, subcomponent] = item.split(' | ');
    if (!register[system])
      register[system] = {};
    
    if (!register[system][component])
      register[system][component] = [];

    register[system][component].push(subcomponent);
  }

  const sortedRegister = Object.keys(register).sort((a, b) => Object.keys(register[b]).length - Object.keys(register[a]).length || a.localeCompare(b));

  for (const system of sortedRegister) {
    console.log(system);
    const sortedComponents = Object.keys(register[system]).sort((a, b) => register[system][b].length - register[system][a].length);
    for (const component of sortedComponents) {
      console.log(`|||${component}`);
      register[system][component].forEach(x => console.log(`||||||${x}`));
    }
  }
}

systemComponents(['SULS | Main Site | Home Page',
'SULS | Main Site | Login Page',
'SULS | Main Site | Register Page',
'SULS | Judge Site | Login Page',
'SULS | Judge Site | Submittion Page',
'Lambda | CoreA | A23',
'SULS | Digital Site | Login Page',
'Lambda | CoreB | B24',
'Lambda | CoreA | A24',
'Lambda | CoreA | A25',
'Lambda | CoreC | C4',
'Indice | Session | Default Storage',
'Indice | Session | Default Security']
);

