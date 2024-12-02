<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>To-Do list</title>
    <link href="output.css" rel="stylesheet">
    <link rel="shortcut icon" href="favicon/favicon.png" type="image/x-icon">

    <!-- Fonte (Work Sans) -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
</head>
<body class="lg:flex lg:flex-col justify-center items-center w-screen text-textColorDark bg-mainColorDark overflow-y-auto overflow-x-hidden">
    <p class="flex justify-center items-center gap-2 lg:hidden text-sm sm:text-[1rem] text-red-500" id="display-alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ff0000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/>
        </svg>
        Seu dispositivo possui uma tela muito pequena, o site pode até funcionar, mas é recomendável que você acesse esse site com um computador com no mínimo 1400px de resolução.
    </p>
    <header class="flex flex-col justify-start items-center mt-4 gap-8 w-full h-fit">
        <!-- Título do site -->
        <h1 class="text-3xl sm:text-4xl md:text-3xl lg:text-4xl font-bold">To-do List</h1>

        <!-- Linha horizontal que separa o título do site em si -->
        <div class="w-[20rem] sm:w-[44rem] border" id="line"></div>

        <!-- Funcionalidades extras -->
        <div class="flex justify-center items-center gap-2 sm:gap-8 relative left-1 sm:static w-screen">
            <!-- Pomodoro -->
            <aside class="w-fit h-52 relative left-4 sm:w-72 sm:h-auto sm:static md:w-96 md:h-52 p-7 box-content sm:p-0 sm:box-border border rounded-xl bg-secondaryColorDark border-zinc-500">
                <!-- Título do Pomodoro -->
                <div class="flex justify-center items-center gap-1 relative top-3 text-1xl sm:text-2xl text-zinc-300" id="title-pomodoro">
                    <!-- Ícone do Pomodoro -->
                    <svg class="flex justify-center items-center" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F87171" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="10" x2="14" y1="2" y2="2"/><line x1="12" x2="15" y1="14" y2="11"/><circle cx="12" cy="14" r="8"/>
                    </svg>
                    <p>Pomodoro</p>
                </div>

                <!-- Minutos e segundos -->
                <div class="flex justify-center items-center relative top-10" id="pomodoro-timer-div">
                    <!-- Input dos minutos -->
                    <input class="relative right-3 w-[4rem] pl-2 z-10 placeholder-zinc-600 focus:outline-none focus:ring-2 text-5xl bg-transparent" type="number" placeholder="25" value="25" maxlength="2" id="pomodoro-minutes" aria-label="Insira os minutos do timer aqui">

                    <p class="text-4xl inline">:</p> <!-- Dois pontos para separar -->

                    <!-- Input dos segundos -->
                    <input class="relative left-2 w-[4.5rem] pl-2 z-10 placeholder-zinc-600 focus:outline-none focus:ring-2 text-5xl bg-transparent" type="number" placeholder="00" value="00" maxlength="2" id="pomodoro-seconds" aria-label="Insira os segundos do timer aqui">
                </div>

                <!-- Botões do Pomodoro -->
                <div class="flex justify-center items-center gap-10 relative bottom-5 h-48" id="div-pomodoro-button">
                    <!-- Botão de iniciar ou pausar timer -->
                    <button id="start-pause-pomodoro" title="Iniciar/pausar timer" aria-label="Inicie o Pomodoro">
                        <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 24 24" fill="none" stroke="#808189" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="6 3 20 12 6 21 6 3"/></svg>
                    </button>

                    <!-- Botão de reiniciar o Pomodoro -->
                    <button id="reset-pomodoro" title="Reiniciar timer" aria-label="Reinicie o Pomodoro">
                        <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 24 24" fill="none" stroke="#808189" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 14 4 9l5-5"/><path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11"/></svg>
                    </button>
                </div>
            </aside>

            <!-- Botão de escolher o idioma -->
            <button class="flex gap-0 sm:gap-2 relative left-4 bottom-20 sm:static h-fit text-xs" id="lang-button" title="Alterar idioma" aria-label="Português Brasileiro/English, trocar de idioma para o inglês">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 8 6 6"/><path d="m4 14 6-6 2-3"/><path d="M2 5h12"/><path d="M7 2h1"/><path d="m22 22-5-10-5 10"/><path d="M14 18h6"/></svg>
                <p class="text-base sm:text-lg">Português Brasileiro/English</p>
            </button>

            <!-- Botão de modo claro e escuro -->
            <button class="relative right-36 sm:static" id="light-dark-mode" title="Modo claro/escuro" aria-label="Modo escuro e claro">
                <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 24 24" fill="none" stroke="#FBBF24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
            </button>
        </div>
        <!-- Data de hoje -->
        <div class="flex flex-col justify-center items-center text-center relative bottom-20 w-48 h-28 border rounded-xl bg-secondaryColorDark border-zinc-500" id="date-div"></div>

        <!-- Frase motivadora -->
        <h1 class="relative bottom-20 text-2xl font-bold hidden lg:block" id="phrase">&OpenCurlyDoubleQuote;<strong class="inline text-3xl font-extrabold">Disciplina</strong> é fazer o que não gosta como se você amasse fazer isso.&CloseCurlyDoubleQuote; - Mike Tyson</h1>
    </header>

    <!-- Adicionar tarefas -->
    <div class="flex justify-center items-center gap-2 relative md:bottom-16">
        <!-- Input de adicionar tarefa -->
        <input class="sm:w-[35rem] md:w-[50rem] h-10 pl-2 border rounded-xl bg-secondaryColorDark border-zinc-500 placeholder-zinc-600" type="text" placeholder="Digite aqui sua tarefa" minlength="1" maxlength="65" id="task-input" aria-label="Digite aqui sua tarefa">

        <!-- Botão de adicionar tarefa -->
        <button class="p-2 border rounded-xl bg-addTaskButtonColorDark border-zinc-400" id="add-task-button" aria-label="Adicionar tarefa">Adicionar tarefa</button>

        <!-- Botão de remover todas as tarefas de uma vez -->
        <button id="clear-all-tasks" title="Remover todas as tarefas" aria-label="Remover todas as tarefas">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#DC2626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>
        </button>
    </div>

    <!-- Área onde as tarefas adicionadas ficam (main) -->
    <main class="flex lg:flex-col flex-wrap justify-center items-center gap-3 lg:h-80 relative top-10 md:bottom-8"></main>
    <script src="script.js"></script>
</body>
</html>
