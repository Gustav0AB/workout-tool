const planningInformation = [
    {
        week: '1 Abril',
        weekEnd: '7 Abril',
        weekCount: '1/13',
        event: '',
        mesociclo: 'Desarrollador',
        microciclo: 'O',
        intensidad: '3 de 6',
        cardio: 'Continuo con intensidades',
        cardioRoutine: '3 sprints de 3" y 3 de 6", Sprint de 10" cada 1" 20", 10 sprints y completar trote total, Trote al 70% alternando con pasos laterales y retrocesos, sprint al 100%',
        totalTime: '100',
        gym: 'Fuerza sub-maxima',
        gymRoutine: '4 series de 10 repeticiones al 80%, Fase positiva Rapida, fase negativa moderada, Alternar ejercicios (anterior- posterior),30 segundos a 1 min de recuperacion entre series, 3 minutos de recupperacion entre ejercicios, 10 ejercicios por sesion',
        gymRoutineDays: 'Lunes: Pecho, Biceps, Hombro -Martes: Espalda, Triceps, y Trapecio -Miercoles: Pierna y Gluteo -Jueves: Pecho, Biceps y Antebrazo -Viernes: Espalda y Triceps'
    },
    {
        week: '08 Abril',
        weekEnd: '14 Abril',
        weekCount: '2/13',
        event: '',
        mesociclo: 'Desarrollador',
        microciclo: '0',
        intensidad: '4 de 6',
        cardio: 'Continuo con intensidades',
        cardioRoutine: '3 sprints de 3" y 3 de 6", Sprint de 10" cada 1" 20", 10 sprints y completar trote total, Trote al 70% alternando con pasos laterales y retrocesos, sprint al 100%,',
        totalTime: '100',
        gym: 'Fuerza sub-maxima',
        gymRoutine: '4 series de 10 repeticiones al 80%, Fase positiva Rapida, fase negativa moderada, Alternar ejercicios (anterior- posterior),30 segundos a 1 min de recuperacion entre series, 3 minutos de recupperacion entre ejercicios, 10 ejercicios por sesion',
        gymRoutineDays: 'Lunes: Pecho, Biceps, Hombro -Martes: Espalda, Triceps, y Trapecio -Miercoles: Pierna y Gluteo -Jueves: Pecho, Biceps y Antebrazo -Viernes: Espalda y Triceps'
    }
]

const root = document.getElementById('root');

planningInformation.forEach( (week, i) => {
    const day = new Date();
    let currentDayName = '', thisWeek = false;

    switch(day.getDay()){
        case 1:
            currentDayName = 'Lunes'
        break;
        case 2:
            currentDayName = 'Martes'
        break;
        case 3:
            currentDayName = 'Miercoles'
        break;
        case 4:
            currentDayName = 'Jueves'
        break;
        case 5:
            currentDayName = 'Viernes'
        break;
    }

    let cardioRows  = '', gymDays = '', gymRows = '';
    week.cardioRoutine.split(',').forEach((cardioRow => {
        cardioRows += ` <li>${cardioRow}</li>`;
    }));

    week.gymRoutine.split(',').forEach((gymRow => {
        gymRows += ` <li>${gymRow}</li>`;
    }));

    week.gymRoutineDays.split('-').forEach((days => {
        if(days.split(':')[0] == currentDayName)
            gymDays += ` <li class='current'>${days}</li>`;
        else 
            gymDays += ` <li >${days}</li>`;
    }));

    if(week.week.split(' ')[0] < day.getDay() && week.weekEnd.split(' ')[0] > day.getDay()){
        thisWeek = true;
    }

    weekHTML = `
        <div id="${i + 1}" class="semana ${thisWeek? 'current-week' : ''}" onclick="toggle(event)">
            <div class="semana__rango">
                <h3>${thisWeek? 'Semana en curso' : ''}</h3>
                <p>Semana del ${week.week}</p>
                <p>Semana ${week.weekCount}</p>
            </div>
            <div class='semana__content'>
                <div class="semana__evento">
                    <p><strong>Evento:</strong> ${week.event}</p>
                </div>
                <div class="semana__info">
                    <p><strong>Mesociclo:</strong> ${week.mesociclo}</p>
                    <p><strong>Microciclo:</strong> ${week.microciclo}</p>
                    <p><strong>Intensidad:</strong> ${week.intensidad}</p>
                </div>
                <div class="semana__cardio">
                    <h3>Cardiovascular: ${week.cardio}</h3>
                    <p><strong>Tiempo semanal total:</strong> ${week.totalTime} minutos</p>
                    <h4>Instrucciones:</h4>
                    <ul>${cardioRows}</ul>
                </div>

                <div class="semana__gym">
                    <h3>Fuerza con pesas: ${week.gym}</h3>
                    <h4>Dias:</h4>
                    <ul>${gymDays}</ul>
                    <h4>Instrucciones: </h4>
                    <ul>${gymRows}</ul>
                </div>
            
            </div>
        </div>  
    `;

    root.innerHTML += weekHTML;

    weekHTML = '';
});


function toggle(e){
    if(!document.getElementById(e.target.parentNode.id).classList.contains('active'))
        document.getElementById(e.target.parentNode.id).classList.add('active')
    else
        document.getElementById(e.target.parentNode.id).classList.remove('active')
}