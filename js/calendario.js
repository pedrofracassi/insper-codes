const templateSeletor = `
  <p>
    Clique nos horários para marcá-los como disponíveis
  </p>
  <div id="seletor-horarios">
    %%ROWS%%
  </div>
`

const templateRow = `
<div class="row-horarios">
  %%HORARIOS%%
</div>
`

function templateHorario (horario, livre) {
  return `
  <div class="${livre ? '' : 'disabled '}horario">
    <p>${horario}</p>
  </div>
  `
}

document.addEventListener('DOMContentLoaded', () => {
  const days = document.querySelectorAll(".day")
  days.forEach(day => {
    console.log('day')
    day.addEventListener('click', event => {
      const element = event.target

      // Colocar círculo atrás do número clicado e remover dos outros
      days.forEach(d => {
        if (d.id == element.id) {
          d.classList.add('active')
        } else {
          d.classList.remove('active')
        }
      })

      showAgendamentos(element.id)
    })
  })
})

function createListeners () {
  const boxesHorarios = document.querySelectorAll('.horario')
  boxesHorarios.forEach(h => {
    h.addEventListener('click', event => {
      const target = event.target

      const horario = target.innerText
      const active = target.classList.contains('active')
      const diaAtual = document.getElementsByClassName('active')[0].id
      const storageId = `horarios:${diaAtual}`
      const horariosStorage = JSON.parse(localStorage.getItem(storageId))

      const indexHorario = horariosStorage.findIndex(h => h.horario == horario)
      horariosStorage[indexHorario] = {
        horario: horario,
        livre: !!!active
      }

      localStorage.setItem(storageId, JSON.stringify(horariosStorage))

      showAgendamentos(diaAtual)
    })
  })
}

function showAgendamentos (dia) {
  // Exibir os agendamentos daquele dia
  const storageId = `horarios:${dia}`

  if (!localStorage.getItem(storageId)) {
    localStorage.setItem(storageId, JSON.stringify([
      {
        horario: '08:00',
        livre: false
      },
      {
        horario: '09:00',
        livre: false
      },
      {
        horario: '10:00',
        livre: false
      },
      {
        horario: '11:00',
        livre: false
      }
    ]))
  }

  const horarios = JSON.parse(localStorage.getItem(storageId))

  console.log(`Renderizando horários`, horarios)

  document.getElementById('container-seletor').innerHTML = templateSeletor.replace('%%ROWS%%', chunkArray(horarios, 2).map(hs => (
    templateRow.replace(`%%HORARIOS%%`, hs.map(h => templateHorario(h.horario, h.livre)).join(''))
  )).join(''))

  createListeners()
}

function chunkArray (array, chunk) {
  var i,j, temporary;
  const chunks = []
  for (i = 0,j = array.length; i < j; i += chunk) {
      temporary = array.slice(i, i + chunk);
      chunks.push(temporary)
  }
  return chunks
}