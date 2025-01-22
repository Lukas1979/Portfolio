function returnEditOverlay(data) {
    return `
    <img onclick="closeCardOverlay()" src="../assets/icons/close-card-overlay.svg" class="card-overlay-close" style="width: 14px; height: 14px; align-self: end;">
    <div onclick="stopProp(event)" id="calendar-container" style="left: 150px; transform: translateX(100vw); transition: transform 0.35s ease-in-out;" class="calendar-container-edit"></div>
<div id="due_prio" class="container-edit-overlay" onclick="bodyOnClick()">
    <div class="title-add-task-overlay font1"><span style="color: #2A3647;">Title</span><span
            style="color: #FF8190;">*</span>
        <div class="input-outside3" id="input_border1"
            onclick="focusInput('title_input'), setPositionMarker('title_input'), showHideError('title_error', false)">
            <input value="${data.title}" onkeydown="enterPressedCreateTask(event)" oninput="showHideError('title_error', false)"
                onfocus="showHideError('title_error', false)" class="input-add-task input-title" id="title_input"
                maxlength="30" type="name" placeholder="Enter a title" autocomplete="off">
        </div>
        <div id="title_error" style="display: none;" class="required font2">This field is required
        </div>
    </div>
    <div class="description font1"><span style="color: #2A3647;">Description</span>
        <div class="text-area-div for-center" onclick="focusInput('text_area'), setPositionMarker('text_area')" style="cursor: pointer;">
            <textarea id="text_area" class="text-area" maxlength="300" placeholder="Enter a Description"></textarea>
            <img src="../assets/icons/recurso.png" alt="">
        </div>
    </div>
<div class="title-add-task font1">
        <span style="color: #2A3647;">Due date</span>
                <span style="color: #FF8190;">*</span>
                    <div onclick="focusInput('input_due_date')" class="input-outside3 font1" id="input_border1" style="cursor: pointer;">
                        <input value="${data.date}" onkeydown="enterPressedCreateTask(event), handleKeyDown(event)" onfocus="closeContactsList(), showHideError('date_error', false);" type="tel" class="input-due-date font1" id="input_due_date" oninput="handleInput(event)" autocomplete="off" placeholder="dd/mm/yyyy" maxlength="10" onclick="moveCursorToEnd(event)">
                        <div class="due-date-icon-hover" onclick="calendarOnClick(), stopProp(event)"></div>
                        <img class="due-date-icon" src="../assets/icons/due_date_icon.png" alt="">
                    </div>
                    <div class="required-date font2" id="date_error" style="display: none;">This field is required</div>
                </div>
    <div class="prio font1"><span style="color: #2A3647;">Prio</span>
        <div class="prio-buttons">
            <div id="prio_button1" onclick="prioButton1(), changePrio('urgent', '${data.title}')" style="border: 1px solid lightgray" class="prio-button1 for-center white-bg">
                <div class="font1 for-center"><span style="margin-right: 8px;">Urgent</span><img id="img_prio_button1"
                        src="../assets/icons/urgent.png" style="width: 20px; height: 15px;"></div>
            </div>
            <div id="prio_button2" onclick="prioButton2(), changePrio('medium', '${data.title}')" style="border: 1px solid lightgray" class="prio-button2 for-center medium-bg">
                <div class="font1 for-center"><span style="margin-right: 8px;">Medium</span><img id="img_prio_button2"
                        src="../assets/icons/medium2.png" style="width: 20px; height: 8px;"></div>
            </div>
            <div id="prio_button3" onclick="prioButton3(), changePrio('low', '${data.title}')" style="border: 1px solid lightgray" class="prio-button3 for-center white-bg">
                <div class="font1 for-center"><span style="margin-right: 8px;">Low</span><img id="img_prio_button3"
                        src="../assets/icons/low.png" style="width: 20px; height: 15px;">
                </div>
            </div>
        </div>
    </div>
    <div class="assigned font1"><div style="display: flex; flex-direction: column; gap: 12px;"><span style="color: #2A3647;">Assigned to</span><div class="circles-contacts-div_2" id="circles_contacts_div" style="left: 0;"></div></div>
        <div class="assigned-input assigned-input-hover"
            onclick="openContactsList(), focusInput('contacts_list'), stopProp(event)">
            <input oninput="searchContacts()" onfocus="openContactsList()" class="input-add-task input-assigned-to"
                id="contacts_list" maxlength="30" type="name" placeholder="Select contacts to assign"
                autocomplete="off">

            <div class="arrow-div for-center" onclick="toggleShowContacts(), stopProp(event)">
                <img id="assign_arrow" src="../assets/icons/arrow_drop_down.png" alt="">
            </div>
            <div class="circles-contacts-div" id="circles_contacts_div" style="height: 0; left: 0; bottom: -8px; margin-top: 4px;"></div>
        </div>
        <div class="list-of-contacts-outside-2 postion-relativ" id="list_of_contacts_outside">
            <div class="list-of-contacts" id="list_of_contacts" onclick=" changeContact(), stopProp(event)">

                <div id="contactsContainer" class="div-contact">

            </div>
        </div>
    </div>
    </div>
    <div style="margin-top: 58px;" class="assigned-subtasks font1"><span style="color: #2A3647;">Subtasks</span>
        <div style="z-index: 0!important;" class="assigned-input-subtasks" onclick="focusInput('subtask_input'), stopProp(event)">
            <input onkeydown="enterPressed(event)" class="input-add-task input-new-subtask" id="subtask_input" maxlength="21" type="name" placeholder="Add  new subtask" autocomplete="off" oninput="showFrame36SubtaskInput(event)">
            <div id="subtask_add_div" class="tasks-add-div for-center"><img src="../assets/icons/add_subtasks.png" alt=""></div>
            
        <div class="frame36" style="display: none">
            <img src="../assets/icons/add_task_subtasks_input_frame36.svg">
            <div onclick="frame36Cancel(), stopProp(event)" class="frame36-hover1"></div>
            <div onclick="addSubtask()" class="frame36-hover2"></div>
        </div>

            <div class="close-check" id="close_check" style="display: none;">
                <div class="div24 for-center" onclick="closeSubtasks(), stopProp(event)">
                    <img src="../assets/icons/close_subtasks.png">
                </div>
                <div class="subtask-separator"></div>
                <div class="div24 for-center" onclick="addSubtask(), stopProp(event)">
                    <img src="../assets/icons/check_subtasks.png">
                </div>
            </div>
        </div>
        <div class="new-div-for-subtasks" style="position: static;  margin-top: 16px; height: 122px!important;" id="render_subtasks"></div>
    </div>
</div>
    <div style="display: flex; justify-content: flex-end; align-items: center;">
    <button id="firebase-button${data.title}" style="width: auto; padding: 0px 12px 0px 12px;" class="create-task for-center" onclick="getEditToFirebase('${data.title}', editDataInArray)">Ok
                        <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.79923 9.15L14.2742 0.675C14.4742 0.475 14.7117 0.375 14.9867 0.375C15.2617 0.375 15.4992 0.475 15.6992 0.675C15.8992 0.875 15.9992 1.1125 15.9992 1.3875C15.9992 1.6625 15.8992 1.9 15.6992 2.1L6.49923 11.3C6.29923 11.5 6.0659 11.6 5.79923 11.6C5.53256 11.6 5.29923 11.5 5.09923 11.3L0.79923 7C0.59923 6.8 0.503397 6.5625 0.51173 6.2875C0.520064 6.0125 0.62423 5.775 0.82423 5.575C1.02423 5.375 1.26173 5.275 1.53673 5.275C1.81173 5.275 2.04923 5.375 2.24923 5.575L5.79923 9.15Z" fill="white"></path>
                        </svg>
                    </button>
    </div>
    `
}

function returnSubtaskCardOverlay(data, i) {

    if (data.subtasks[i].done) {

        return `
        <div onclick="markSubtaskDone(${i},'${data.title}')" class="card-overlay-subtask" style="user-select: none;">
            <div class="check-mark-wrapper">
                <img id="checkmark${i}" src="../assets/icons/check-mark-subtask-ovleray-checked.svg">
            </div>
                <div  id="subtask-text${i}" style="text-decoration: line-through" class="card-overlay-subtask-title">${data.subtasks[i].task}</div>
            </div>`
    } else {

        return `
        <div onclick="markSubtaskDone(${i},'${data.title}')" class="card-overlay-subtask" style="user-select: none;">
            <div class="check-mark-wrapper">
                <img id="checkmark${i}" src="../assets/icons/check-mark-subtask-overlay-unchecked.svg">
            </div>
                <div id="subtask-text${i}" class="card-overlay-subtask-title">${data.subtasks[i].task}</div>
            </div>`
    }

}

function returnContactsCardOverlay(name, nameIn, color) {
    return ` <div class="card-overlay-contact-card">
                <div class="card-overlay-contact">
                    <div class="card-board-contact-icon" style="background-color: ${color};">${nameIn}</div>
                    <div class="coard-board-contact-name">${name}</div>
                </div>
            </div>`
}

function renderPrio(data, prioSVG) {
    return `
      <div class="card-overlay-subtitle">Priority:</div>
        <div class="prio-wrapper-overlay">
            <div class="card-overlay-prio-title">${data.prio.charAt(0).toUpperCase() + data.prio.slice(1)}</div>
            <img src="${prioSVG}" class="card-overlay-prio-icon">
        </div>
`
}


function returnTaskOverlay(data) {
    return `
        <div class="inner-div-overflow">
            <div class="card-overlay-category-close-wrapper">
                <div class="card-overlay-category">${data.category}</div>
                <img onclick="closeCardOverlay()" src="../assets/icons/close-card-overlay.svg" class="card-overlay-close">
            </div>
            <div class="card-overlay-title">${data.title}</div>
            <div class="card-overlay-descritption">${data.description}</div>
            <div class="card-overlay-wrapper">
                <div class="card-overlay-subtitle">Due date: </div>
                <div class="card-overlay-date">${data.date}</div>
            </div>
            <div class="card-overlay-wrapper" id="prio-card-overlay">
            </div>
            <div id="assigned-container-board" class="card-overlay-assigend-to display-board-none">
                <div class="card-overlay-subtitle" style="margin-bottom: 8px;">Assigned To:</div>
                <div id="render-assigned-content-overlay">
                </div>
            </div>
            <div id="subtask-container-board" class="card-overlay-subtasks-wrapper display-board-none">
                <div class="card-overlay-subtitle" style="margin-bottom: 8px;">Subtasks</div>
                <div id="render-subtasks-content-overlay">
                </div>
                </div>
                <div class="card-overlay-edit-wrapper">
                <div class="card-overlay-delete-edit-wrapper" onclick="deleteTaskFromBoard('${data.title}')">
                <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 18C2.45 18 1.97917 17.8042 1.5875 17.4125C1.19583 17.0208 1 16.55 1 16V3C0.716667 3 0.479167 2.90417 0.2875 2.7125C0.0958333 2.52083 0 2.28333 0 2C0 1.71667 0.0958333 1.47917 0.2875 1.2875C0.479167 1.09583 0.716667 1 1 1H5C5 0.716667 5.09583 0.479167 5.2875 0.2875C5.47917 0.0958333 5.71667 0 6 0H10C10.2833 0 10.5208 0.0958333 10.7125 0.2875C10.9042 0.479167 11 0.716667 11 1H15C15.2833 1 15.5208 1.09583 15.7125 1.2875C15.9042 1.47917 16 1.71667 16 2C16 2.28333 15.9042 2.52083 15.7125 2.7125C15.5208 2.90417 15.2833 3 15 3V16C15 16.55 14.8042 17.0208 14.4125 17.4125C14.0208 17.8042 13.55 18 13 18H3ZM3 3V16H13V3H3ZM5 13C5 13.2833 5.09583 13.5208 5.2875 13.7125C5.47917 13.9042 5.71667 14 6 14C6.28333 14 6.52083 13.9042 6.7125 13.7125C6.90417 13.5208 7 13.2833 7 13V6C7 5.71667 6.90417 5.47917 6.7125 5.2875C6.52083 5.09583 6.28333 5 6 5C5.71667 5 5.47917 5.09583 5.2875 5.2875C5.09583 5.47917 5 5.71667 5 6V13ZM9 13C9 13.2833 9.09583 13.5208 9.2875 13.7125C9.47917 13.9042 9.71667 14 10 14C10.2833 14 10.5208 13.9042 10.7125 13.7125C10.9042 13.5208 11 13.2833 11 13V6C11 5.71667 10.9042 5.47917 10.7125 5.2875C10.5208 5.09583 10.2833 5 10 5C9.71667 5 9.47917 5.09583 9.2875 5.2875C9.09583 5.47917 9 5.71667 9 6V13Z" fill="#2A3647"/>
                </svg>
                <div>Delete</div>
                </div>
                <div style="display: flex; align-items: center;"><img src="../assets/icons/trennstrich.svg"></div>
                <div class="card-overlay-delete-edit-wrapper" onclick="getEditTaskOvleray('${data.title}')">
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 17H3.4L12.025 8.375L10.625 6.975L2 15.6V17ZM16.3 6.925L12.05 2.725L13.45 1.325C13.8333 0.941667 14.3042 0.75 14.8625 0.75C15.4208 0.75 15.8917 0.941667 16.275 1.325L17.675 2.725C18.0583 3.10833 18.2583 3.57083 18.275 4.1125C18.2917 4.65417 18.1083 5.11667 17.725 5.5L16.3 6.925ZM14.85 8.4L4.25 19H0V14.75L10.6 4.15L14.85 8.4Z" fill="#2A3647"/>
                </svg>
                <div>Edit</div>
                </div>
            </div>
            </div>`
}

function returnAssignedContacts(color, name) {
    return `<div class="card-board-contact-icon" style="background-color:${color};">${name}</div>`
}

function returnTaskCard(task, prioSVG, categoryColor) {
    return `        <div draggable="true" ondrag="ondragRemoveCurrentElement()" ondragstart="startDragging('${task.title}', '${task.kanbanId}')" ondragend="getDataForRenderStatus()" class="card-board" id="${task.title}" onclick="getOpenTaskOverlay('${task.title}')" data-long-press="500" ontouchstart="startLongTouch(event,'${task.title}', '${task.kanbanId}')" ontouchend="onDrop(event)" ontouchmove="onTouchMove(event)">
                        <div style="background-color: ${categoryColor}" class="card-category">${task.category}</div>
                        <div class="card-board-text-wrap">
                            <div id="task-title${task.title}" class="card-board-title">${task.title}</div>
                            <div id="task-description${task.title}" class="card-board-description">${task.description}</div>
                        </div>
                        <div class="card-board-subtask" id="subtask${task.title}">
                        </div>
                        <div class="card-board-contact-urgent-wrapper">
                            <div class="card-board-contacts" id="contacts${task.title}">
                            </div>
                            <div class="card-board-urgent">
                                <div class="card-board-urgent-icon"><img id="priocard${task.title}" src=${prioSVG} onerror="this.style.visibility='hidden';">
                                </div>
                            </div>
                        </div>
                    </div>
            `
}

function returnAddTaskOverlay() {
    return `        
    <div id="overlay-add-task" class="overlay-add-task" style="display: flex; flex-direction: column;">
        <img onclick="addTaskBoardOverlayToggle()" src="../assets/icons/close-card-overlay.svg" class="card-overlay-close" style="padding: 24px; width: 14px; height: 14px; align-self: end;">
 <div onclick="stopProp(event)," id="calendar-container" style="transform: translateX(100vw); transition: transform 0.35s ease-in-out;" class="calendar-container"></div>
            <div onclick="bodyOnClick()">
                <div class="add-task-board-wrapper">
                <div style="left: 72px!important" class="add-task for-center">Add task</div>


                <div style="left: 72px!important" class="title-description-overlay">
                    <div class="title-add-task-overlay font1"><span style="color: #2A3647;">Title</span><span
                            style="color: #FF8190;">*</span>

                        <div class="input-outside3" id="input_border1"
                            onclick="focusInput('title_input'), showHideError('title_error', false)">

                            <input onkeydown="enterPressedCreateTask(event)"
                                oninput="showHideError('title_error', false)"
                                onfocus="showHideError('title_error', false)" class="input-add-task input-title"
                                id="title_input" maxlength="30" type="name" placeholder="Enter a title"
                                autocomplete="off" />

                        </div>

                        <div id="title_error" style="display: none;" class="required font2">This field is required
                        </div>
                    </div>

                    <div class="description font1"><span style="color: #2A3647;">Description</span>

                        <div class="text-area-div for-center" onclick="focusInput('text_area')"
                            style="cursor: pointer;">

                            <textarea id="text_area" class="text-area" maxlength="300"
                                placeholder="Enter a Description"></textarea>

                            <img src="../assets/icons/recurso.png" alt="">
                        </div>

                    </div>

                    <div class="assigned font1"><div style="display: flex; flex-direction: column; gap: 12px;"><span style="color: #2A3647;">Assigned to</span><div class="circles-contacts-div_2" id="circles_contacts_div" style="left: 0;"></div></div>

                        <div class="assigned-input assigned-input-hover"
                            onclick="openContactsList(), focusInput('contacts_list'), stopProp(event)">

                            <input oninput="searchContacts()" onfocus="openContactsList()"
                                class="input-add-task input-assigned-to" id="contacts_list" maxlength="30" type="name"
                                placeholder="Select contacts to assign" autocomplete="off" />

                            <div class="arrow-div for-center" onclick="toggleShowContacts(), stopProp(event)">
                                <img id="assign_arrow" src="../assets/icons/arrow_drop_down.png" alt="">
                            </div>
                        </div>
                        

                        <div class="list-of-contacts-outside" id="list_of_contacts_outside">
                            <div class="list-of-contacts" id="list_of_contacts" onclick="stopProp(event)">
                                <div id="contactsContainer" class="div-contact"></div>
                            </div>
                        </div>


                    </div>


                </div>


                <div style="left: 569px!important;" class="separator"></div>


                <div class="due-prio" id="due_prio">
                    <div class=" font1">
                        <span style="color: #2A3647;">Due date</span>
                        <span style="color: #FF8190;">*</span>
                    <div onclick="focusInput('input_due_date')" class="input-outside3 font1" id="input_border1" style="cursor: pointer;">
                        <input  onkeydown="enterPressedCreateTask(event), handleKeyDown(event)" onfocus="closeContactsList(), showHideError('date_error', false);" type="tel" class="input-due-date font1" id="input_due_date" oninput="handleInput(event)" autocomplete="off" placeholder="dd/mm/yyyy" maxlength="10" onclick="moveCursorToEnd(event)">
                        <div class="due-date-icon-hover" onclick="calendarOnClick(), stopProp(event)"></div>
                        <img class="due-date-icon" src="../assets/icons/due_date_icon.png" alt="">
                    </div>
                        <div class="required-date font2" id="date_error" style="display: none;">This field is
                            required</div>
                    </div>
                    <div class="prio font1"><span style="color: #2A3647;">Prio</span>
                        <div class="prio-buttons">
                            <div id="prio_button1" onclick="prioButton1()" style="border: 1px solid lightgray" class="prio-button1 for-center white-bg">
                                <div class="font1 for-center"><span style="margin-right: 8px;">Urgent</span><img
                                        id="img_prio_button1" src="../assets/icons/urgent.png"
                                        style="width: 20px; height: 15px;"></div>
                            </div>
                            <div id="prio_button2" onclick="prioButton2()" style="border: 1px solid lightgray" class="prio-button2 for-center medium-bg">
                                <div class="font1 for-center"><span style="margin-right: 8px;">Medium</span><img
                                        id="img_prio_button2" src="../assets/icons/medium2.png"
                                        style="width: 20px; height: 8px;"></div>
                            </div>
                            <div id="prio_button3" onclick="prioButton3()" style="border: 1px solid lightgray"  class="prio-button3 for-center white-bg">
                                <div class="font1 for-center"><span style="margin-right: 8px;">Low</span><img
                                        id="img_prio_button3" src="../assets/icons/low.png"
                                        style="width: 20px; height: 15px;">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="assigned font1 category-div"><span style="color: #2A3647;">Category</span><span
                            style="color: #FF8190;">*</span>


                        <div onclick="toggleShowCategory(), stopProp(event)" style="cursor: pointer;"
                            class="assigned-input category-z" style="color: black;">

                            <span id="selected category" style="margin-left: 16px;">Select task category</span>

                            <div class="arrow-div for-center"><img id="assign_arrow_category"
                                    src="../assets/icons/arrow_drop_down.png" alt=""></div>

                        </div>
                        <div class="list-of-category-outside z1" id="list_of_category_outside"
                            style="overflow: hidden;">
                            <div class="list-of-category" id="list_of_category" onclick="stopProp(event)">

                                <div onclick="categoryTechnicalTask()" class="category-task-div"><span
                                        style="margin-left: 16px;">Technical Task</span></div>
                                <div onclick="categoryUserStory()" class="category-task-div"><span
                                        style="margin-left: 16px;">User Story</span></div>
                            </div>
                        </div>
                        <div class="required-category font2" id="category_error" style="display: none;">This field
                            is required</div>
                    </div>
                    <div class="assigned-subtasks font1"><span style="color: #2A3647;">Subtasks</span>
                        <div class="assigned-input-subtasks" onclick="focusInput('subtask_input'), stopProp(event)">
                            <input onkeydown="enterPressed(event)" class="input-add-task input-new-subtask"
                                id="subtask_input" maxlength="21" type="name" placeholder="Add  new subtask"
                                autocomplete="off" oninput="showFrame36SubtaskInput(event)" />
                            <div id="subtask_add_div" class="tasks-add-div for-center"><img
                                    src="../assets/icons/add_subtasks.png" alt=""></div>

                                    <div class="frame36" style="display: none">
                                        <img src="../assets/icons/add_task_subtasks_input_frame36.svg">
                                        <div onclick="frame36Cancel(), stopProp(event)" class="frame36-hover1"></div>
                                        <div onclick="addSubtask()" class="frame36-hover2"></div>
                                    </div>

                            <div class="close-check" id="close_check" style="display: none;">
                                <div class="div24 for-center" onclick="closeSubtasks(), stopProp(event)">
                                    <img src="../assets/icons/close_subtasks.png">
                                </div>
                                <div class="subtask-separator"></div>
                                <div class="div24 for-center" onclick="addSubtask(), stopProp(event)">
                                    <img src="../assets/icons/check_subtasks.png">
                                </div>
                            </div>
                        </div>
                        <div class="new-div-for-subtasks" id="render_subtasks"></div>
                    </div>
                </div>
                <div class="buttons">
                    <div class="clear for-center">Clear x</div>
                    <button class="create-task for-center" onclick="createTaskClick()">Create Task
                        <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M5.79923 9.15L14.2742 0.675C14.4742 0.475 14.7117 0.375 14.9867 0.375C15.2617 0.375 15.4992 0.475 15.6992 0.675C15.8992 0.875 15.9992 1.1125 15.9992 1.3875C15.9992 1.6625 15.8992 1.9 15.6992 2.1L6.49923 11.3C6.29923 11.5 6.0659 11.6 5.79923 11.6C5.53256 11.6 5.29923 11.5 5.09923 11.3L0.79923 7C0.59923 6.8 0.503397 6.5625 0.51173 6.2875C0.520064 6.0125 0.62423 5.775 0.82423 5.575C1.02423 5.375 1.26173 5.275 1.53673 5.275C1.81173 5.275 2.04923 5.375 2.24923 5.575L5.79923 9.15Z"
                                fill="white" />
                        </svg>
                    </button>
                </div>
                <div class="field-required">
                    <div style="color: #FF8190; transform: translateY(-3px);">*</div>This field is required
                </div>
                <div class="task-added-to-board" id="task_added_to_board"><span class="font1">Task added to
                        board</span><img src="../assets/icons/vector_task_added_to_board.png"></div>
            </div>
        </div>`
}

function renderSubtask(total, done, progress, task) {
    return `<div class="card-board-subtask-progress-wrap">
             <div class="card-board-subtask-progress-background">
                <div id="progress${task}" class="card-board-subtask-progress" style="width: ${progress}%;"></div>
                </div>
               </div>
            <div id="total${task}" class="card-board-subtask-number">${done}/${total} Subtasks</div>`
}