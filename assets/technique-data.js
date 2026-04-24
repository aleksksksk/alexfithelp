window.TechniqueLibrary = {
    groupLabels: {
        all: { en: "All", ru: "Все" },
        chest: { en: "Chest", ru: "Грудь" },
        back: { en: "Back", ru: "Спина" },
        legs: { en: "Legs", ru: "Ноги" },
        shoulders: { en: "Shoulders", ru: "Плечи" },
        arms: { en: "Arms", ru: "Руки" },
        core: { en: "Core", ru: "Кор" }
    },
    ui: {
        eyebrow: {
            en: "Technique library",
            ru: "Библиотека техники"
        },
        resultsAll: {
            en: (count) => `Showing ${count} exercises.`,
            ru: (count) => `Показано ${count} упражнений.`
        },
        resultsFiltered: {
            en: (label, count) => `${label}: ${count} exercises.`,
            ru: (label, count) => `${label}: ${count} упражнений.`
        },
        hoverHint: {
            en: "hover / tap",
            ru: "наведи / тапни"
        },
        focus: {
            en: "Focus",
            ru: "Акцент"
        },
        cue: {
            en: "Cue",
            ru: "Подсказка"
        },
        details: {
            en: "Open details",
            ru: "Открыть карточку"
        },
        allLabel: {
            en: "All exercises",
            ru: "Все упражнения"
        }
    },
    collections: {
        dumbbells: {
            accent: "#ffd640",
            accentRgb: "255,214,64",
            fileTitle: {
                en: "Dumbbell Technique",
                ru: "Техника упражнений с гантелями"
            },
            pageTitle: {
                en: "Dumbbell exercises",
                ru: "Упражнения с гантелями"
            },
            pageIntro: {
                en: "Browse the dumbbell library, switch language at any time, and expand each card for a practical cue and training focus.",
                ru: "Открывай библиотеку упражнений с гантелями, переключай язык в любой момент и раскрывай карточки для быстрого акцента и техники."
            },
            pageStatA: {
                en: "42 cards",
                ru: "42 карточки"
            },
            pageStatB: {
                en: "Hover expansion",
                ru: "Раскрытие по наведению"
            },
            exercises: [
                {
                    group: "chest",
                    title: { en: "Dumbbell Bench Press", ru: "Жим гантелей лежа" },
                    hook: { en: "Classic chest press for size and basic strength.", ru: "Классический жим для массы и базовой силы груди." },
                    focus: { en: "The chest works first, while front delts and triceps assist the lockout.", ru: "Главный акцент идет в грудь, а передние дельты и трицепс помогают дожать вес." },
                    cue: { en: "Pull the shoulders back, lower to the lower chest, and press up on a calm arc.", ru: "Сведи лопатки, опускай гантели к нижней линии груди и выжимай их вверх по спокойной дуге." }
                },
                {
                    group: "chest",
                    title: { en: "Incline Dumbbell Press", ru: "Жим гантелей на наклонной скамье" },
                    hook: { en: "A press that emphasizes the upper chest.", ru: "Жим с акцентом на верх груди." },
                    focus: { en: "Useful when you want more upper-chest work without turning the lift into a shoulder press.", ru: "Полезен, когда нужно нагрузить верх груди, но не превратить движение в жим плечами." },
                    cue: { en: "Set the bench around 30 to 45 degrees and lower the dumbbells just below the clavicle line.", ru: "Поставь угол примерно 30-45 градусов и опускай гантели чуть ниже линии ключиц." }
                },
                {
                    group: "chest",
                    title: { en: "Decline Dumbbell Press", ru: "Жим гантелей на отрицательной скамье" },
                    hook: { en: "A more lower-chest-focused press with a steady base.", ru: "Жим со смещением акцента в нижнюю часть груди." },
                    focus: { en: "Often feels stable and lets many lifters load the lower chest without excess shoulder stress.", ru: "Часто ощущается устойчиво и позволяет грузить низ груди без лишнего стресса на плечи." },
                    cue: { en: "Keep your body fixed, lower under control, and do not let the neck tense up.", ru: "Зафиксируй корпус, опускай вес под контролем и не перенапрягай шею." }
                },
                {
                    group: "chest",
                    title: { en: "Dumbbell Fly", ru: "Разводка гантелей лежа" },
                    hook: { en: "Isolation work for chest stretch and control.", ru: "Изоляция для растяжения и контроля грудных мышц." },
                    focus: { en: "Best used to feel the chest opening and closing after heavier pressing work.", ru: "Лучше всего помогает почувствовать растяжение и сведение груди после более тяжелых жимов." },
                    cue: { en: "Keep a soft elbow bend and draw a wide arc instead of turning the rep into a press.", ru: "Сохраняй мягкий сгиб в локтях и рисуй широкую дугу, а не превращай упражнение в жим." }
                },
                {
                    group: "chest",
                    title: { en: "Incline Fly", ru: "Разводка на наклонной скамье" },
                    hook: { en: "Fly variation that shifts the stretch higher on the chest.", ru: "Вариант разводки, который переносит растяжение выше по груди." },
                    focus: { en: "Helps highlight the upper fibers and gives a lighter, longer range than pressing.", ru: "Помогает выделить верхние пучки и дает более длинную амплитуду, чем жим." },
                    cue: { en: "Use a moderate load, open the arms slowly, and stop before the shoulders lose position.", ru: "Бери умеренный вес, медленно раскрывай руки и не опускай их так низко, чтобы плечи теряли позицию." }
                },
                {
                    group: "chest",
                    title: { en: "Squeeze Press", ru: "Сжимающий жим гантелей" },
                    hook: { en: "Pressing while squeezing the dumbbells together for constant chest tension.", ru: "Жим с постоянным сдавливанием гантелей для непрерывного напряжения груди." },
                    focus: { en: "The inner chest feels active because pressure stays on the whole rep.", ru: "Средняя часть груди включается сильнее, потому что давление сохраняется на всей амплитуде." },
                    cue: { en: "Press the bells into each other before you move and keep that pressure all the way up.", ru: "Сначала сожми гантели друг к другу и держи это давление до конца повторения." }
                },
                {
                    group: "chest",
                    title: { en: "Neutral Grip Press", ru: "Жим гантелей нейтральным хватом" },
                    hook: { en: "A shoulder-friendlier press with a more natural arm path.", ru: "Более щадящий для плеч жим с естественной траекторией рук." },
                    focus: { en: "Useful when a wide chest press bothers the shoulders but you still want pressing volume.", ru: "Полезен, когда широкий жим раздражает плечи, но объем жимов нужно оставить." },
                    cue: { en: "Keep the palms facing each other and let the elbows travel close to a comfortable path.", ru: "Держи ладони друг к другу и веди локти по близкой, но комфортной траектории." }
                },
                {
                    group: "back",
                    title: { en: "One Arm Row", ru: "Тяга гантели одной рукой" },
                    hook: { en: "A staple row for lats and side-to-side balance.", ru: "Базовая тяга для широчайших и выравнивания сторон." },
                    focus: { en: "Lets you feel the lat pulling the elbow back without much help from the other side.", ru: "Позволяет прочувствовать, как широчайшая тянет локоть назад без большой помощи от другой стороны." },
                    cue: { en: "Brace the free hand, keep the spine long, and pull the elbow toward the hip.", ru: "Упрись свободной рукой, удлини спину и тяни локоть к тазу, а не к плечу." }
                },
                {
                    group: "back",
                    title: { en: "Chest Supported Row", ru: "Тяга с опорой грудью" },
                    hook: { en: "Stable rowing without extra lower-back fatigue.", ru: "Стабильная тяга без лишней усталости поясницы." },
                    focus: { en: "Good for middle-back work when you want less cheating and more clean pulling.", ru: "Хорошо подходит для середины спины, когда нужна чистая тяга без читинга." },
                    cue: { en: "Press the chest into the bench and pull with the elbows instead of jerking the hands up.", ru: "Прижми грудь к скамье и веди движение локтями, а не рывком руками." }
                },
                {
                    group: "back",
                    title: { en: "Renegade Row", ru: "Ренегатская тяга" },
                    hook: { en: "A row that adds hard anti-rotation work for the core.", ru: "Тяга, которая одновременно жестко нагружает кор против вращения." },
                    focus: { en: "The lift combines upper-back effort with plank stability.", ru: "Упражнение соединяет нагрузку на верх спины со стабильностью планки." },
                    cue: { en: "Spread the feet, brace the abs, and row without letting the hips twist.", ru: "Поставь ноги шире, напряги пресс и тяни гантель без разворота таза." }
                },
                {
                    group: "back",
                    title: { en: "Dumbbell Deadlift", ru: "Становая тяга с гантелями" },
                    hook: { en: "Full-body hinge for the posterior chain.", ru: "Полное шарнирное движение для задней цепи." },
                    focus: { en: "Builds glutes, hamstrings, back tension, and grip in one simple pattern.", ru: "Развивает ягодицы, бицепс бедра, напряжение спины и хват в одном простом движении." },
                    cue: { en: "Push the hips back first, keep the weights close to the legs, and stand by driving through the floor.", ru: "Сначала отведи таз назад, держи гантели близко к ногам и вставай, сильно продавливая пол стопами." }
                },
                {
                    group: "back",
                    title: { en: "Incline Row", ru: "Тяга на наклонной скамье" },
                    hook: { en: "Controlled upper-back row with a fixed torso.", ru: "Контролируемая тяга для верха спины с фиксированным корпусом." },
                    focus: { en: "Makes it easier to load the back instead of the lower body.", ru: "Помогает нагружать именно спину, а не компенсировать ногами и поясницей." },
                    cue: { en: "Pull toward the lower ribs or upper stomach and let the elbows match your target area.", ru: "Тяни к нижним ребрам или верхней части живота и направляй локти под нужный акцент." }
                },
                {
                    group: "back",
                    title: { en: "Seal Row", ru: "Тяга лежа на высокой скамье" },
                    hook: { en: "Strict row with almost no help from the legs.", ru: "Строгая тяга почти без помощи ног." },
                    focus: { en: "Excellent when you want pure back work and full stretch at the bottom.", ru: "Отлично подходит, когда нужна чистая работа спины и полный нижний растяг." },
                    cue: { en: "Let the arms hang fully, then row up without bouncing the body off the bench.", ru: "Дай рукам полностью вытянуться, затем тяни вверх без отскока корпусом от скамьи." }
                },
                {
                    group: "back",
                    title: { en: "High Row", ru: "Высокая тяга гантелей" },
                    hook: { en: "Upper-back row with a higher elbow path.", ru: "Тяга для верха спины с более высокой линией локтя." },
                    focus: { en: "Useful for upper lats, rear delts, and a denser upper back.", ru: "Полезна для верха широчайших, задней дельты и плотности верхней части спины." },
                    cue: { en: "Drive the elbows up and back, but do not shrug the shoulders to start the rep.", ru: "Веди локти вверх и назад, но не начинай повторение подъемом плеч к ушам." }
                },
                {
                    group: "legs",
                    title: { en: "Goblet Squat", ru: "Гоблет-присед" },
                    hook: { en: "A simple squat that teaches depth and upright posture.", ru: "Простой присед, который учит глубине и вертикальному корпусу." },
                    focus: { en: "Great for quads, glutes, and learning how to sit between the hips.", ru: "Отлично нагружает квадрицепс и ягодицы и учит садиться между бедрами." },
                    cue: { en: "Hold the bell close to the chest, keep the chest proud, and descend between the knees.", ru: "Держи гантель у груди, не складывай корпус и опускайся между коленями." }
                },
                {
                    group: "legs",
                    title: { en: "Dumbbell Squat", ru: "Присед с гантелями" },
                    hook: { en: "Straightforward lower-body squat without a barbell.", ru: "Прямой вариант приседа для ног без штанги." },
                    focus: { en: "Works the quads and glutes while the torso learns to stay braced under load.", ru: "Нагружает квадрицепс и ягодицы, а корпус учится держать жесткость под весом." },
                    cue: { en: "Keep the bells at the sides, spread the floor with the feet, and stand through the whole foot.", ru: "Держи гантели по бокам, раскрывай пол стопами и вставай через всю стопу." }
                },
                {
                    group: "legs",
                    title: { en: "Romanian Deadlift", ru: "Румынская тяга с гантелями" },
                    hook: { en: "One of the best dumbbell hinges for hamstrings and glutes.", ru: "Одно из лучших движений с гантелями для бицепса бедра и ягодиц." },
                    focus: { en: "The stretch sits in the back of the thighs while the glutes finish the ascent.", ru: "Растяжение ложится в заднюю поверхность бедра, а подъем завершают ягодицы." },
                    cue: { en: "Keep the knees soft, slide the weights down the legs, and stop once the hamstrings fully load.", ru: "Оставь колени мягкими, веди гантели вдоль ног и останавливайся, когда задняя поверхность бедра полностью натянулась." }
                },
                {
                    group: "legs",
                    title: { en: "Walking Lunges", ru: "Выпады в ходьбе" },
                    hook: { en: "Unilateral leg work with balance and coordination.", ru: "Односторонняя работа ног с балансом и координацией." },
                    focus: { en: "Builds glutes, quads, and strong control on each step.", ru: "Развивает ягодицы, квадрицепс и хороший контроль на каждом шаге." },
                    cue: { en: "Take a long enough step, drop with control, and push through the front foot to move forward.", ru: "Делай достаточно длинный шаг, опускайся под контролем и продавливайся вперед через переднюю ногу." }
                },
                {
                    group: "legs",
                    title: { en: "Bulgarian Split Squat", ru: "Болгарский сплит-присед" },
                    hook: { en: "A hard single-leg squat for glutes and quads.", ru: "Тяжелый одноногий присед для ягодиц и квадрицепса." },
                    focus: { en: "Useful for fixing side-to-side imbalances and building leg strength with less load.", ru: "Полезен для устранения дисбаланса сторон и развития силы ног с меньшим внешним весом." },
                    cue: { en: "Keep the front foot planted, descend almost straight down, and let the front leg do the work.", ru: "Упрись передней стопой, опускайся почти по вертикали и заставь переднюю ногу делать основную работу." }
                },
                {
                    group: "legs",
                    title: { en: "Step Ups", ru: "Зашагивания на тумбу" },
                    hook: { en: "Athletic lower-body work built around one strong step.", ru: "Атлетичное упражнение для ног вокруг одного мощного шага." },
                    focus: { en: "Trains glutes, quads, and controlled force transfer through one leg.", ru: "Тренирует ягодицы, квадрицепс и перенос усилия через одну ногу." },
                    cue: { en: "Place the whole foot on the box, stand tall, and avoid jumping off the trailing leg.", ru: "Ставь всю стопу на платформу, выпрямляйся вверх и не отталкивайся лишний раз задней ногой." }
                },
                {
                    group: "legs",
                    title: { en: "Sumo Squat", ru: "Сумо-присед" },
                    hook: { en: "Wide-stance squat that shifts work toward glutes and adductors.", ru: "Широкий присед, который сильнее нагружает ягодицы и приводящие мышцы." },
                    focus: { en: "Great when you want to open the hips and feel the inner thigh working.", ru: "Хорошо подходит, когда нужно раскрыть таз и почувствовать внутреннюю поверхность бедра." },
                    cue: { en: "Turn the toes out only as much as the hips allow and keep the knees tracking the same line.", ru: "Разворачивай носки настолько, насколько позволяют таз и колени, и веди колени в ту же линию." }
                },
                {
                    group: "shoulders",
                    title: { en: "Shoulder Press", ru: "Жим гантелей над головой" },
                    hook: { en: "A staple vertical press for shoulder strength.", ru: "Базовый вертикальный жим для силы плеч." },
                    focus: { en: "Front and middle delts lead the movement while the triceps finish the top.", ru: "Движение ведут передняя и средняя дельта, а трицепс закрывает верхнюю точку." },
                    cue: { en: "Brace the abs, keep the ribs stacked, and press straight up without leaning back.", ru: "Напряги пресс, собери ребра и выжимай гантели вверх без переразгиба в пояснице." }
                },
                {
                    group: "shoulders",
                    title: { en: "Arnold Press", ru: "Жим Арнольда" },
                    hook: { en: "Rotating press with a long shoulder range.", ru: "Жим с разворотом кистей и длинной амплитудой для плеч." },
                    focus: { en: "Adds front-delt involvement and a deeper feeling at the bottom of the rep.", ru: "Добавляет работу передней дельты и дает более глубокое ощущение в нижней точке." },
                    cue: { en: "Start palms toward you, rotate gradually on the way up, and keep the motion smooth.", ru: "Стартуй ладонями к себе, плавно разворачивай кисти вверх и не рви движение." }
                },
                {
                    group: "shoulders",
                    title: { en: "Lateral Raise", ru: "Подъемы гантелей в стороны" },
                    hook: { en: "One of the most direct tools for wider-looking shoulders.", ru: "Одно из самых прямых движений для визуально широких плеч." },
                    focus: { en: "Loads the middle delt with minimal help when the form stays strict.", ru: "Нагружает среднюю дельту почти без лишней помощи, если держать строгую технику." },
                    cue: { en: "Lift out to the sides with soft elbows and stop around shoulder height.", ru: "Поднимай руки в стороны с мягким локтем и останавливайся примерно на уровне плеч." }
                },
                {
                    group: "shoulders",
                    title: { en: "Front Raise", ru: "Подъемы перед собой" },
                    hook: { en: "Simple isolation for the front delt.", ru: "Простая изоляция для передней дельты." },
                    focus: { en: "Works best as an accessory when front-delt strength or shoulder awareness is lacking.", ru: "Лучше всего работает как дополнительное движение, когда не хватает силы или контроля передней дельты." },
                    cue: { en: "Raise the bell to shoulder height without swinging the torso.", ru: "Поднимай гантель до уровня плеч без раскачки корпуса." }
                },
                {
                    group: "shoulders",
                    title: { en: "Rear Delt Raise", ru: "Разведения на заднюю дельту" },
                    hook: { en: "Rear-delt isolation that balances pressing-heavy programs.", ru: "Изоляция задней дельты, которая балансирует программы с большим количеством жимов." },
                    focus: { en: "Supports shoulder health, posture, and a fuller upper back look.", ru: "Поддерживает здоровье плеч, осанку и более полный верх спины." },
                    cue: { en: "Hinge forward, keep a slight bend at the elbow, and move out instead of rowing back.", ru: "Наклонись вперед, оставь легкий сгиб локтя и веди руки в стороны, а не назад как в тяге." }
                },
                {
                    group: "shoulders",
                    title: { en: "Upright Row", ru: "Тяга к подбородку с гантелями" },
                    hook: { en: "Upper-body pull for delts and traps when done carefully.", ru: "Тяга для дельт и трапеций, если выполнять ее аккуратно." },
                    focus: { en: "Can build the top line of the shoulders, but range and comfort matter a lot.", ru: "Может укрепить верхнюю линию плеч, но здесь особенно важны амплитуда и комфорт." },
                    cue: { en: "Pull only as high as the shoulders tolerate and keep the wrists neutral.", ru: "Тяни только до комфортной высоты и сохраняй нейтральные запястья." }
                },
                {
                    group: "shoulders",
                    title: { en: "Shrugs", ru: "Шраги с гантелями" },
                    hook: { en: "Direct trap work with a simple line of force.", ru: "Прямая работа на трапеции с простой линией усилия." },
                    focus: { en: "Good for upper-trap strength, carries, and grip support.", ru: "Полезны для силы верхней трапеции, переносок и поддержки хвата." },
                    cue: { en: "Lift the shoulders straight up, pause briefly, and lower them under control.", ru: "Поднимай плечи строго вверх, делай короткую паузу и опускай их подконтрольно." }
                },
                {
                    group: "arms",
                    title: { en: "Dumbbell Curl", ru: "Сгибание рук с гантелями" },
                    hook: { en: "Foundational biceps curl with full freedom of the hands.", ru: "Базовое сгибание на бицепс с полной свободой кистей." },
                    focus: { en: "A strong choice for learning clean elbow flexion and steady biceps tension.", ru: "Отличный вариант, чтобы научиться чистому сгибанию в локте и ровному напряжению бицепса." },
                    cue: { en: "Keep the elbows near the torso and lift without throwing the shoulders forward.", ru: "Держи локти возле корпуса и поднимай гантели без выброса плеч вперед." }
                },
                {
                    group: "arms",
                    title: { en: "Hammer Curl", ru: "Молотки" },
                    hook: { en: "Neutral-grip curl for biceps, brachialis, and forearms.", ru: "Сгибание нейтральным хватом для бицепса, брахиалиса и предплечий." },
                    focus: { en: "Helps build thicker-looking arms and stronger grip support.", ru: "Помогает сделать руку визуально плотнее и усиливает хват." },
                    cue: { en: "Keep the thumbs up, stay tall, and curl without swinging the torso.", ru: "Держи большие пальцы вверх, оставайся собранным и не раскачивай корпус." }
                },
                {
                    group: "arms",
                    title: { en: "Concentration Curl", ru: "Концентрированный подъем" },
                    hook: { en: "Strict single-arm curl for clean biceps isolation.", ru: "Строгий одноармейский подъем для чистой изоляции бицепса." },
                    focus: { en: "Helps remove momentum and improve peak contraction awareness.", ru: "Убирает инерцию и помогает лучше почувствовать пиковое сокращение." },
                    cue: { en: "Pin the elbow to the inner thigh and keep that position fixed through the rep.", ru: "Прижми локоть к внутренней части бедра и не смещай его во время повторения." }
                },
                {
                    group: "arms",
                    title: { en: "Incline Curl", ru: "Сгибание на наклонной скамье" },
                    hook: { en: "A curl from a stretched shoulder position for the long head.", ru: "Сгибание из растянутого положения плеча для длинной головки бицепса." },
                    focus: { en: "The bottom position makes the curl harder and often more effective for shape.", ru: "Нижняя точка делает движение сложнее и часто полезнее для формы бицепса." },
                    cue: { en: "Let the arms hang freely and resist the urge to bring the elbows forward.", ru: "Дай рукам свободно висеть и не выводи локти вперед по ходу движения." }
                },
                {
                    group: "arms",
                    title: { en: "Overhead Extension", ru: "Разгибание из-за головы" },
                    hook: { en: "A triceps extension that stretches the long head well.", ru: "Разгибание на трицепс с сильным растяжением длинной головки." },
                    focus: { en: "Useful for adding fullness to the back of the arm.", ru: "Полезно, если нужно добавить объем задней части руки." },
                    cue: { en: "Point the elbows mostly forward, lower the weight behind the head, and fully extend without flaring wide.", ru: "Направляй локти в основном вперед, опускай вес за голову и разгибай руки без сильного разведения в стороны." }
                },
                {
                    group: "arms",
                    title: { en: "Kickbacks", ru: "Разгибание в наклоне" },
                    hook: { en: "Short-range triceps work with a strong squeeze at lockout.", ru: "Короткая работа на трицепс с сильным сокращением в конце." },
                    focus: { en: "Best as a finisher when precision matters more than load.", ru: "Лучше всего работает как добивка, когда важнее точность, чем большой вес." },
                    cue: { en: "Freeze the upper arm in place and move only from the elbow.", ru: "Зафиксируй плечо и двигай только предплечьем из локтя." }
                },
                {
                    group: "arms",
                    title: { en: "Zottman Curl", ru: "Подъем Зоттмана" },
                    hook: { en: "Curl up with supination, lower with pronation, and train the whole arm.", ru: "Подъем с супинацией и опускание в пронации для работы всей руки." },
                    focus: { en: "Blends biceps tension with forearm loading in one controlled rep.", ru: "Соединяет напряжение бицепса с хорошей нагрузкой на предплечья в одном повторении." },
                    cue: { en: "Rotate the hands calmly at the top and keep the wrists firm on the way down.", ru: "Спокойно разворачивай кисти в верхней точке и держи запястья плотными на спуске." }
                },
                {
                    group: "core",
                    title: { en: "Russian Twist", ru: "Русский твист" },
                    hook: { en: "Dynamic rotational work for the trunk.", ru: "Динамическая ротационная работа для корпуса." },
                    focus: { en: "Challenges the obliques and teaches you to rotate the rib cage, not just the hands.", ru: "Нагружает косые мышцы и учит вращать грудную клетку, а не просто водить руками." },
                    cue: { en: "Lean back slightly, brace the abs, and turn the torso side to side with the weight.", ru: "Слегка отклонись назад, напряги пресс и поворачивай корпус из стороны в сторону вместе с весом." }
                },
                {
                    group: "core",
                    title: { en: "Weighted Sit Up", ru: "Скручивание с весом" },
                    hook: { en: "A loaded sit-up for stronger trunk flexion.", ru: "Скручивание с дополнительным весом для более сильного сгибания корпуса." },
                    focus: { en: "Useful for direct ab work when you want more than bodyweight resistance.", ru: "Полезно для прямой работы на пресс, когда собственного веса уже мало." },
                    cue: { en: "Keep the weight close enough to control and descend as slowly as you rise.", ru: "Держи вес так, чтобы им можно было управлять, и опускайся так же медленно, как поднимаешься." }
                },
                {
                    group: "core",
                    title: { en: "Side Bend", ru: "Наклоны в сторону с гантелью" },
                    hook: { en: "Simple lateral flexion work for the obliques.", ru: "Простая работа на боковое сгибание и косые мышцы." },
                    focus: { en: "Builds awareness of the side line of the torso and trunk control.", ru: "Развивает ощущение боковой линии корпуса и контроль туловища." },
                    cue: { en: "Bend slowly toward the loaded side and return by squeezing the opposite side of the torso.", ru: "Медленно наклоняйся в сторону веса и возвращайся за счет напряжения противоположной стороны корпуса." }
                },
                {
                    group: "core",
                    title: { en: "Plank Pull Through", ru: "Планка с протяжкой гантели" },
                    hook: { en: "Anti-rotation core drill built from a plank position.", ru: "Антиротационное упражнение на кор из позиции планки." },
                    focus: { en: "The abs and glutes work hard to stop the body from twisting under the pull.", ru: "Пресс и ягодицы сильно включаются, чтобы тело не скручивалось во время протяжки." },
                    cue: { en: "Set a wide base, keep the hips level, and pull the bell across without shifting the torso.", ru: "Поставь ноги шире, держи таз ровно и протягивай гантель без смещения корпуса." }
                },
                {
                    group: "core",
                    title: { en: "Dead Bug", ru: "Дэд баг с гантелью" },
                    hook: { en: "A controlled trunk-stability drill from the floor.", ru: "Контролируемое упражнение на стабильность корпуса с пола." },
                    focus: { en: "Teaches the ribs, pelvis, and limbs to stay coordinated under tension.", ru: "Учит держать ребра, таз и конечности согласованно под напряжением." },
                    cue: { en: "Press the lower back into the floor and shorten the range if that contact starts to break.", ru: "Прижимай поясницу к полу и уменьши амплитуду, если этот контакт начинает теряться." }
                },
                {
                    group: "core",
                    title: { en: "Woodchopper", ru: "Дровосек с гантелью" },
                    hook: { en: "Diagonal rotation for the trunk and shoulder girdle.", ru: "Диагональное вращение для корпуса и плечевого пояса." },
                    focus: { en: "Pairs rotation with bracing, which makes it useful for athletic trunk control.", ru: "Сочетает вращение с жесткостью корпуса, поэтому полезно для атлетического контроля." },
                    cue: { en: "Move across the body on a diagonal and let the torso rotate as one unit.", ru: "Веди вес по диагонали через тело и вращай корпус как единый блок." }
                },
                {
                    group: "core",
                    title: { en: "Overhead Hold", ru: "Удержание гантели над головой" },
                    hook: { en: "Static overhead stability with core and shoulder demand.", ru: "Статическая стабильность над головой с нагрузкой на кор и плечо." },
                    focus: { en: "Makes the trunk, shoulder, and upper back stabilize a weight in a tall position.", ru: "Заставляет корпус, плечо и верх спины стабилизировать вес в высоком положении." },
                    cue: { en: "Lock the ribs down, squeeze the glutes lightly, and keep the arm stacked over the shoulder.", ru: "Опусти ребра, слегка напряги ягодицы и держи руку строго над плечом." }
                }
            ]
        },
        barbells: {
            accent: "#4cc3ff",
            accentRgb: "76,195,255",
            fileTitle: {
                en: "Barbell Technique",
                ru: "Техника упражнений со штангой"
            },
            pageTitle: {
                en: "Barbell exercises",
                ru: "Упражнения со штангой"
            },
            pageIntro: {
                en: "Use the barbell library when you want classic strength patterns with clear muscle-group filters and short technical cues.",
                ru: "Используй библиотеку штанги, когда нужны классические силовые паттерны с фильтрами по мышечным группам и короткими техническими подсказками."
            },
            pageStatA: {
                en: "41 strength lifts",
                ru: "41 силовое движение"
            },
            pageStatB: {
                en: "Bilingual names",
                ru: "Двуязычные названия"
            },
            exercises: [
                {
                    group: "chest",
                    title: { en: "Barbell Bench Press", ru: "Жим штанги лежа" },
                    hook: { en: "The classic heavy press for chest and overall pressing strength.", ru: "Классический тяжелый жим для груди и общей силы жима." },
                    focus: { en: "Great for loading the chest hard while the triceps and shoulders help finish the rep.", ru: "Позволяет серьезно нагрузить грудь, а трицепс и плечи помогают завершить повторение." },
                    cue: { en: "Set the upper back, keep the bar path stable, and press back toward the rack line.", ru: "Собери верх спины, держи траекторию штанги стабильной и жми немного назад к линии стоек." }
                },
                {
                    group: "chest",
                    title: { en: "Incline Press", ru: "Жим штанги на наклонной скамье" },
                    hook: { en: "Upper-chest pressing with a barbell setup.", ru: "Жим со штангой для верхней части груди." },
                    focus: { en: "Useful for building upper-chest density and pressing power from a tilted torso.", ru: "Полезен для плотности верха груди и силы жима из наклонного положения." },
                    cue: { en: "Keep the shoulder blades tight and touch the bar lower than you expect for a safe path.", ru: "Сохраняй лопатки сведенными и касайся штангой чуть ниже ожидаемой точки для безопасной траектории." }
                },
                {
                    group: "chest",
                    title: { en: "Decline Press", ru: "Жим штанги на отрицательной скамье" },
                    hook: { en: "A lower-chest press with a shorter, strong range.", ru: "Жим на нижнюю часть груди с короткой и сильной амплитудой." },
                    focus: { en: "Often allows a stable pressing groove and a strong lockout.", ru: "Часто дает устойчивую траекторию и сильную верхнюю фазу." },
                    cue: { en: "Fix the body tightly and keep the shoulders packed while the bar descends.", ru: "Плотно зафиксируй тело и не теряй положение плеч, пока штанга опускается вниз." }
                },
                {
                    group: "chest",
                    title: { en: "Close Grip Bench", ru: "Жим узким хватом" },
                    hook: { en: "Bench variation that shifts more work into triceps.", ru: "Вариант жима, который сильнее включает трицепс." },
                    focus: { en: "Still trains chest and pressing mechanics, but with more elbow extension demand.", ru: "Все еще тренирует грудь и механику жима, но требует больше разгибания локтя." },
                    cue: { en: "Bring the hands in moderately, keep the elbows tucked enough, and lower to the lower chest.", ru: "Сдвинь хват умеренно уже, слегка прижми локти и опускай штангу к нижней части груди." }
                },
                {
                    group: "chest",
                    title: { en: "Spoto Press", ru: "Жим Спото" },
                    hook: { en: "Paused press just above the chest for control and strength.", ru: "Жим с паузой над грудью для контроля и силы." },
                    focus: { en: "Builds tension in the hardest part of the bench without resting on the chest.", ru: "Развивает напряжение в сложной части жима без опоры штанги на грудь." },
                    cue: { en: "Stop the bar just off the chest, hold the tension, and press only when the position stays solid.", ru: "Останови штангу чуть выше груди, сохрани напряжение и жми только из устойчивой позиции." }
                },
                {
                    group: "chest",
                    title: { en: "Pin Press", ru: "Жим с упоров" },
                    hook: { en: "Dead-stop bench variation for specific range strength.", ru: "Жим из мертвой точки для силы в конкретной амплитуде." },
                    focus: { en: "Useful when you want to attack a sticking point with no rebound.", ru: "Полезен, когда нужно пробить слабый участок без инерции и отскока." },
                    cue: { en: "Set the pins where you miss, brace hard, and drive the bar up from a full stop.", ru: "Поставь упоры на слабой высоте, плотно соберись и поднимай штангу из полной остановки." }
                },
                {
                    group: "chest",
                    title: { en: "Wide Grip Bench", ru: "Жим широким хватом" },
                    hook: { en: "Bench setup that biases the chest more strongly.", ru: "Жимовая постановка, которая сильнее смещает работу в грудь." },
                    focus: { en: "Can reduce range of motion and increase chest involvement when shoulders tolerate it.", ru: "Может сократить амплитуду и усилить участие груди, если плечи нормально переносят такой хват." },
                    cue: { en: "Widen the hands only as far as you can keep the shoulders tight and pain free.", ru: "Расширяй хват только настолько, насколько можешь удерживать плечи собранными и без боли." }
                },
                {
                    group: "back",
                    title: { en: "Deadlift", ru: "Становая тяга" },
                    hook: { en: "A cornerstone hinge for total-body strength.", ru: "Ключевое шарнирное движение для силы всего тела." },
                    focus: { en: "Builds posterior-chain strength, grip, and the ability to produce force from the floor.", ru: "Развивает заднюю цепь, хват и умение выдавать силу от пола." },
                    cue: { en: "Pull the slack out of the bar, brace hard, and push the floor away instead of yanking.", ru: "Выбери люфт из штанги, жестко соберись и отталкивай пол, а не дергай вес рывком." }
                },
                {
                    group: "back",
                    title: { en: "Bent Over Row", ru: "Тяга штанги в наклоне" },
                    hook: { en: "Classic rowing pattern for thickness through the back.", ru: "Классическая тяга для толщины спины." },
                    focus: { en: "Targets lats, mid back, and rear chain isometrics all at once.", ru: "Нагружает широчайшие, середину спины и изометрическую работу задней цепи одновременно." },
                    cue: { en: "Set the torso angle first, then pull the bar toward the lower ribs without standing up.", ru: "Сначала зафиксируй угол корпуса, затем тяни штангу к нижним ребрам без выпрямления вверх." }
                },
                {
                    group: "back",
                    title: { en: "Pendlay Row", ru: "Тяга Пендлея" },
                    hook: { en: "Explosive row from the floor with a dead stop each rep.", ru: "Взрывная тяга от пола с полной остановкой в каждом повторении." },
                    focus: { en: "Useful for power off the floor and strict upper-back loading.", ru: "Полезна для силы старта и строгой нагрузки на верх спины." },
                    cue: { en: "Reset the torso each rep, pull fast, and return the bar all the way to the floor.", ru: "Каждый раз заново собирай корпус, тяни быстро и полностью возвращай штангу на пол." }
                },
                {
                    group: "back",
                    title: { en: "Rack Pull", ru: "Тяга из стоек" },
                    hook: { en: "Partial deadlift from an elevated position.", ru: "Частичная становая тяга из приподнятой стартовой точки." },
                    focus: { en: "Lets you overload the top half of the pull and upper-back lockout.", ru: "Позволяет перегрузить верхнюю часть тяги и финальную фиксацию спиной." },
                    cue: { en: "Set the pins where you want the overload and finish by driving the hips through.", ru: "Выставь высоту под нужную амплитуду и завершай движение мощным дожимом тазом." }
                },
                {
                    group: "back",
                    title: { en: "T-Bar Row", ru: "Тяга Т-грифа" },
                    hook: { en: "A row built for mid-back density.", ru: "Тяга, которая хорошо набирает плотность середины спины." },
                    focus: { en: "Loads the lats and mid back heavily with a fixed bar path.", ru: "Сильно нагружает широчайшие и середину спины за счет фиксированной траектории." },
                    cue: { en: "Stay hinged, keep the chest open, and drive the elbows back instead of curling the handle.", ru: "Оставайся в наклоне, держи грудь раскрытой и веди локти назад, а не скручивай ручку руками." }
                },
                {
                    group: "back",
                    title: { en: "Meadows Row", ru: "Тяга Медоуза" },
                    hook: { en: "One-arm landmine row with a deep lat stretch.", ru: "Одноarmовая тяга в лэндмайне с глубоким растяжением широчайшей." },
                    focus: { en: "Useful for unilateral back work and a strong lat contraction near the hip.", ru: "Полезна для односторонней работы спины и сильного сокращения широчайшей у таза." },
                    cue: { en: "Set the torso angle, let the shoulder stretch at the bottom, and pull the elbow back on a low path.", ru: "Зафиксируй корпус, дай плечу вытянуться внизу и тяни локоть назад по низкой линии." }
                },
                {
                    group: "back",
                    title: { en: "Snatch Grip Deadlift", ru: "Становая тяга рывковым хватом" },
                    hook: { en: "Wide-grip deadlift that makes the upper back work harder.", ru: "Тяга широким рывковым хватом, которая сильнее нагружает верх спины." },
                    focus: { en: "Adds range of motion and demands more back position control.", ru: "Увеличивает амплитуду и требует лучшего контроля положения спины." },
                    cue: { en: "Use a wide grip you can hold, keep the chest tall, and stay patient off the floor.", ru: "Возьми широкий, но контролируемый хват, держи грудь высоко и не срывай штангу слишком резко с пола." }
                },
                {
                    group: "legs",
                    title: { en: "Back Squat", ru: "Присед со штангой на спине" },
                    hook: { en: "The main lower-body strength builder for many lifters.", ru: "Главный силовой строитель ног для многих атлетов." },
                    focus: { en: "Builds quads, glutes, trunk strength, and overall loading tolerance.", ru: "Развивает квадрицепс, ягодицы, силу корпуса и переносимость большой нагрузки." },
                    cue: { en: "Brace before you descend, sit between the hips, and drive up with the bar balanced over midfoot.", ru: "Соберись до спуска, опускайся между бедрами и вставай так, чтобы штанга оставалась над серединой стопы." }
                },
                {
                    group: "legs",
                    title: { en: "Front Squat", ru: "Фронтальный присед" },
                    hook: { en: "A squat that demands more quad drive and upright posture.", ru: "Присед, который требует больше работы квадрицепса и вертикального корпуса." },
                    focus: { en: "Useful for leg strength and trunk discipline without the same forward lean as a back squat.", ru: "Полезен для силы ног и дисциплины корпуса без такого наклона, как в обычном приседе." },
                    cue: { en: "Lift the elbows, keep the chest high, and sit straight down as long as balance allows.", ru: "Подними локти, держи грудь высоко и опускайся максимально вертикально, пока это позволяет баланс." }
                },
                {
                    group: "legs",
                    title: { en: "Romanian Deadlift", ru: "Румынская тяга со штангой" },
                    hook: { en: "A barbell hinge for hamstrings and glutes.", ru: "Шарнирное движение со штангой для бицепса бедра и ягодиц." },
                    focus: { en: "Keeps tension on the posterior chain without starting from the floor each rep.", ru: "Сохраняет постоянное напряжение в задней цепи без старта с пола на каждом повторении." },
                    cue: { en: "Unlock the knees, push the hips back, and keep the bar brushing the legs.", ru: "Слегка согни колени, отводи таз назад и веди штангу почти по ногам." }
                },
                {
                    group: "legs",
                    title: { en: "Good Morning", ru: "Гуд морнинг" },
                    hook: { en: "A hinge that teaches the torso to stay braced under a bar.", ru: "Шарнирное движение, которое учит держать корпус жестким под штангой." },
                    focus: { en: "Builds posterior-chain control and awareness of hip-dominant movement.", ru: "Развивает контроль задней цепи и понимание движений через таз." },
                    cue: { en: "Take a small knee bend, fold from the hips, and stop before the spine position starts to change.", ru: "Сделай небольшой сгиб в коленях, складывайся из таза и остановись до потери позиции спины." }
                },
                {
                    group: "legs",
                    title: { en: "Zercher Squat", ru: "Зерчер-присед" },
                    hook: { en: "Front-loaded squat that taxes the core hard.", ru: "Переднезагруженный присед, который сильно нагружает кор." },
                    focus: { en: "Useful for leg strength, posture, and upper-back tension.", ru: "Полезен для силы ног, осанки и напряжения верхней части спины." },
                    cue: { en: "Keep the bar secure in the elbows, stay tall, and avoid collapsing forward from the chest.", ru: "Надежно зафиксируй штангу в локтевых сгибах, держись высоко и не складывай грудь вперед." }
                },
                {
                    group: "legs",
                    title: { en: "Pause Squat", ru: "Присед с паузой" },
                    hook: { en: "Squat variation that removes the rebound out of the bottom.", ru: "Вариант приседа без отскока из нижней точки." },
                    focus: { en: "Improves bottom position control, patience, and force from a dead stop.", ru: "Улучшает контроль нижней позиции, терпение и усилие из мертвой точки." },
                    cue: { en: "Hold the bottom without relaxing, then rise by keeping the same posture you used to descend.", ru: "Удерживай низ без расслабления и вставай, сохраняя ту же механику, что и на спуске." }
                },
                {
                    group: "legs",
                    title: { en: "Hack Squat", ru: "Хак-присед со штангой" },
                    hook: { en: "A quad-focused squat pattern with the bar behind the legs.", ru: "Приседовой паттерн на квадрицепс со штангой за ногами." },
                    focus: { en: "Changes leverage and can feel very direct for the thighs.", ru: "Меняет рычаги и часто очень напрямую нагружает переднюю поверхность бедра." },
                    cue: { en: "Keep the bar close behind the legs, stay patient off the floor, and stand through the midfoot.", ru: "Держи штангу близко за ногами, не срывай ее резко с пола и вставай через середину стопы." }
                },
                {
                    group: "shoulders",
                    title: { en: "Overhead Press", ru: "Жим штанги стоя" },
                    hook: { en: "The main barbell press for overhead strength.", ru: "Главный жим со штангой для силы над головой." },
                    focus: { en: "Builds delts, triceps, and trunk stiffness under vertical load.", ru: "Развивает дельты, трицепс и жесткость корпуса под вертикальной нагрузкой." },
                    cue: { en: "Squeeze the glutes, clear the chin, and press the bar into a stacked overhead line.", ru: "Напряги ягодицы, убери подбородок с пути и выведи штангу в вертикальную линию над собой." }
                },
                {
                    group: "shoulders",
                    title: { en: "Push Press", ru: "Жим швунгом" },
                    hook: { en: "A power press that uses the legs to launch the bar.", ru: "Силовой жим, который использует ноги для разгона штанги." },
                    focus: { en: "Useful for overload and learning to transfer force from the lower body to the bar.", ru: "Полезен для перегрузки и понимания, как передавать усилие от ног в штангу." },
                    cue: { en: "Dip straight down, stay tall, and drive the legs before the arms take over.", ru: "Сделай короткий прямой подсад, оставайся высоким и сначала разгони штангу ногами, а потом дожми руками." }
                },
                {
                    group: "shoulders",
                    title: { en: "Shrugs", ru: "Шраги со штангой" },
                    hook: { en: "Heavy trap work in a simple vertical path.", ru: "Тяжелая работа на трапеции по простой вертикальной линии." },
                    focus: { en: "Supports upper-trap strength and carrying ability.", ru: "Поддерживает силу верхней трапеции и перенос тяжелых весов." },
                    cue: { en: "Lift the shoulders straight up and keep the neck relaxed instead of rolling circles.", ru: "Поднимай плечи строго вверх и не крути ими по кругу." }
                },
                {
                    group: "shoulders",
                    title: { en: "Strict Press", ru: "Строгий жим" },
                    hook: { en: "An overhead press with no leg drive.", ru: "Жим над головой без помощи ног." },
                    focus: { en: "Purely challenges pressing strength and torso discipline.", ru: "Чисто проверяет силу жима и дисциплину корпуса." },
                    cue: { en: "Keep the knees still, brace hard, and press from a dead-still start.", ru: "Не давай коленям помогать, соберись и жми из полностью спокойного старта." }
                },
                {
                    group: "shoulders",
                    title: { en: "Bradford Press", ru: "Жим Брэдфорда" },
                    hook: { en: "Continuous-tension press moving front to back over the head.", ru: "Жим с постоянным напряжением, где штанга движется спереди назад над головой." },
                    focus: { en: "Keeps the shoulders working without fully resting between mini phases.", ru: "Держит плечи под нагрузкой почти без отдыха между фазами." },
                    cue: { en: "Use a modest load, move the bar just over the head, and avoid forcing shoulder range you do not own.", ru: "Бери умеренный вес, веди штангу над головой на короткой траектории и не выжимай амплитуду, которой не контролируешь." }
                },
                {
                    group: "shoulders",
                    title: { en: "Landmine Press", ru: "Жим в лэндмайне" },
                    hook: { en: "A safer angled press for shoulders and upper chest.", ru: "Более безопасный жим по диагонали для плеч и верхней части груди." },
                    focus: { en: "Great when full overhead work feels rough on the shoulders.", ru: "Отличный вариант, когда полный вертикальный жим неприятен для плеч." },
                    cue: { en: "Press up and forward on the bar path while keeping the ribs down and the shoulder blade moving freely.", ru: "Жми вперед и вверх по траектории грифа, при этом держи ребра собранными и не зажимай лопатку." }
                },
                {
                    group: "shoulders",
                    title: { en: "Behind Neck Press", ru: "Жим из-за головы" },
                    hook: { en: "An advanced shoulder press that demands mobility and control.", ru: "Продвинутый жим на плечи, который требует мобильности и контроля." },
                    focus: { en: "Only useful if the shoulders and upper back move well and the path stays pain free.", ru: "Имеет смысл только при хорошей подвижности плеч и верха спины и полном отсутствии боли." },
                    cue: { en: "Use light to moderate load, keep the torso tall, and stop well before any shoulder pinch.", ru: "Работай с легким или умеренным весом, держи корпус высоким и прекращай движение при любом защемлении в плече." }
                },
                {
                    group: "arms",
                    title: { en: "Barbell Curl", ru: "Сгибание рук со штангой" },
                    hook: { en: "Heavy curling pattern for overall biceps loading.", ru: "Тяжелое сгибание для общей нагрузки на бицепс." },
                    focus: { en: "Allows more total load than many dumbbell curls when the torso stays quiet.", ru: "Позволяет использовать больший вес, чем многие варианты с гантелями, если не помогать корпусом." },
                    cue: { en: "Keep the elbows close, curl to where tension stays on the biceps, and lower under control.", ru: "Держи локти близко, поднимай штангу до точки, где напряжение остается на бицепсе, и опускай ее подконтрольно." }
                },
                {
                    group: "arms",
                    title: { en: "Reverse Curl", ru: "Обратное сгибание" },
                    hook: { en: "Pronated curl that biases brachialis and forearms.", ru: "Сгибание пронированным хватом с акцентом на брахиалис и предплечья." },
                    focus: { en: "Useful for thicker forearms and elbow-flexor balance.", ru: "Полезно для более плотных предплечий и баланса сгибателей локтя." },
                    cue: { en: "Keep the wrists neutral, use a controlled range, and do not let the shoulders swing the bar up.", ru: "Держи запястья нейтрально, работай в контролируемой амплитуде и не подбрасывай штангу плечами." }
                },
                {
                    group: "arms",
                    title: { en: "Drag Curl", ru: "Драг-керл" },
                    hook: { en: "Curl variation where the bar drags up the torso.", ru: "Вариант сгибания, где штанга скользит вверх вдоль корпуса." },
                    focus: { en: "Changes leverage and can create a strong biceps squeeze with less front-delt help.", ru: "Меняет рычаги и часто дает сильное сокращение бицепса без лишней помощи передней дельты." },
                    cue: { en: "Slide the bar close to the body and let the elbows drift back slightly instead of forward.", ru: "Веди штангу максимально близко к телу и допускай легкий уход локтей назад, а не вперед." }
                },
                {
                    group: "arms",
                    title: { en: "JM Press", ru: "JM Press" },
                    hook: { en: "Hybrid press-extension that overloads the triceps.", ru: "Гибрид жима и разгибания для тяжелой работы на трицепс." },
                    focus: { en: "Popular in strength work when lockout power needs extra attention.", ru: "Популярен в силовой подготовке, когда нужно отдельно усилить дожим." },
                    cue: { en: "Lower the bar toward the upper chest with tucked elbows and drive it back up in a short arc.", ru: "Опускай штангу к верхней части груди с прижатыми локтями и поднимай по короткой дуге обратно." }
                },
                {
                    group: "arms",
                    title: { en: "21s Curl", ru: "Сгибание 21" },
                    hook: { en: "Segmented curl set for long biceps tension.", ru: "Разделенный сет на бицепс для долгого напряжения." },
                    focus: { en: "Creates a lot of time under tension through bottom, top, and full ranges.", ru: "Создает большое время под нагрузкой в нижней, верхней и полной амплитуде." },
                    cue: { en: "Keep every segment strict and resist speeding up once the burn starts.", ru: "Держи каждую часть строго и не ускоряйся, когда начинается жжение." }
                },
                {
                    group: "arms",
                    title: { en: "Skull Crushers", ru: "Французский жим лежа" },
                    hook: { en: "Direct triceps work from an overhead elbow angle.", ru: "Прямая работа на трицепс из положения с согнутым локтем над головой." },
                    focus: { en: "Stretches the triceps well and can add mass when done with control.", ru: "Хорошо растягивает трицепс и помогает набирать объем при аккуратном выполнении." },
                    cue: { en: "Bend mostly at the elbows, aim the bar behind the head or forehead line, and extend without losing elbow position.", ru: "Сгибайся в основном в локтях, веди штангу за линию лба или чуть за голову и разгибай руки без расползания локтей." }
                },
                {
                    group: "core",
                    title: { en: "Barbell Rollout", ru: "Роллаут со штангой" },
                    hook: { en: "A strong anti-extension drill for the trunk.", ru: "Сильное антирозгибательное упражнение для корпуса." },
                    focus: { en: "Challenges the abs to stop the spine from collapsing as the body lengthens.", ru: "Заставляет пресс не дать позвоночнику провалиться, пока тело вытягивается вперед." },
                    cue: { en: "Move out only as far as you can keep the ribs and pelvis linked together.", ru: "Уходи вперед только настолько, насколько можешь держать ребра и таз связанными в одну линию." }
                },
                {
                    group: "core",
                    title: { en: "Landmine Twist", ru: "Повороты в лэндмайне" },
                    hook: { en: "Rotational core work with a fixed landmine path.", ru: "Ротационная работа на кор с фиксированной траекторией лэндмайна." },
                    focus: { en: "Useful for controlled rotation through the trunk and hips.", ru: "Полезно для контролируемого вращения корпуса и таза." },
                    cue: { en: "Turn the torso and hips together and guide the bar side to side without collapsing the chest.", ru: "Поворачивай корпус и таз вместе и веди штангу из стороны в сторону, не складывая грудную клетку." }
                },
                {
                    group: "core",
                    title: { en: "Landmine Rotation", ru: "Диагональные ротации в лэндмайне" },
                    hook: { en: "More dynamic rotational landmine work.", ru: "Более динамичная ротационная работа в лэндмайне." },
                    focus: { en: "Builds power transfer through the trunk while keeping the hands on a guided path.", ru: "Развивает передачу силы через корпус, сохраняя направляемую траекторию руками." },
                    cue: { en: "Stay athletic, rotate through the feet and hips, and do not let the lower back do all the work.", ru: "Держи спортивную стойку, вращайся через стопы и таз и не отдавай всю работу пояснице." }
                },
                {
                    group: "core",
                    title: { en: "Side Bend", ru: "Наклоны в сторону со штангой" },
                    hook: { en: "Lateral trunk work under a barbell load.", ru: "Боковая работа корпуса под нагрузкой штанги." },
                    focus: { en: "Used to challenge the obliques and side-line stability.", ru: "Используется для нагрузки на косые мышцы и устойчивость боковой линии корпуса." },
                    cue: { en: "Move slowly, keep the pelvis steady, and avoid turning the movement into rotation.", ru: "Двигайся медленно, удерживай таз стабильным и не превращай наклон во вращение." }
                },
                {
                    group: "core",
                    title: { en: "Overhead Hold", ru: "Удержание штанги над головой" },
                    hook: { en: "Static overhead stability for the trunk and shoulders.", ru: "Статическая устойчивость над головой для корпуса и плеч." },
                    focus: { en: "Teaches stacked overhead position and strong bracing under the bar.", ru: "Учит собранной позиции над головой и сильной жесткости под штангой." },
                    cue: { en: "Lock the elbows, keep the ribs down, and stand tall without drifting backward.", ru: "Выпрями локти, опусти ребра и стой высоко, не заваливаясь назад." }
                },
                {
                    group: "core",
                    title: { en: "Barbell Sit Up", ru: "Скручивание со штангой" },
                    hook: { en: "Loaded trunk flexion with a bar held under control.", ru: "Нагруженное сгибание корпуса со штангой под контролем." },
                    focus: { en: "Adds resistance to direct abdominal work when bodyweight is not enough.", ru: "Добавляет сопротивление прямой работе на пресс, когда собственного веса уже мало." },
                    cue: { en: "Use a manageable load, stay organized through the torso, and descend as carefully as you rise.", ru: "Бери управляемый вес, сохраняй собранный корпус и опускайся так же аккуратно, как поднимаешься." }
                },
                {
                    group: "core",
                    title: { en: "Front Hold", ru: "Фронтальное удержание" },
                    hook: { en: "Static front-loaded brace drill.", ru: "Статическое удержание веса перед собой для жесткости корпуса." },
                    focus: { en: "Forces the trunk to resist being pulled forward under load.", ru: "Заставляет корпус сопротивляться вытягиванию вперед под нагрузкой." },
                    cue: { en: "Stand tall, breathe behind a tight brace, and do not let the chest collapse.", ru: "Стой высоко, дыши за плотным брейсингом и не позволяй груди проваливаться." }
                }
            ]
        },
        cable: {
            accent: "#56e7d7",
            accentRgb: "86,231,215",
            fileTitle: {
                en: "Cable Technique",
                ru: "Техника упражнений на блоках"
            },
            pageTitle: {
                en: "Cable machine exercises",
                ru: "Упражнения на блоках"
            },
            pageIntro: {
                en: "Cable work is about tension and smooth control. Filter by muscle group and open each card for the main idea and cue.",
                ru: "Работа на блоках строится на напряжении и плавном контроле. Фильтруй по мышечным группам и открывай карточки, чтобы быстро понять акцент и технику."
            },
            pageStatA: {
                en: "18 cable moves",
                ru: "18 движений на блоках"
            },
            pageStatB: {
                en: "Smooth filtering",
                ru: "Плавная фильтрация"
            },
            exercises: [
                {
                    group: "chest",
                    title: { en: "Cable Fly", ru: "Сведение рук в кроссовере" },
                    hook: { en: "Classic cable fly for chest isolation and constant tension.", ru: "Классическое сведение в кроссовере для изоляции груди и постоянного напряжения." },
                    focus: { en: "Keeps the chest loaded even where dumbbells would lose tension.", ru: "Сохраняет нагрузку на грудь даже там, где гантели уже почти теряют напряжение." },
                    cue: { en: "Bring the handles together in a hugging arc and stop before the shoulders roll forward.", ru: "Своди рукояти по дуге, будто обнимаешь, и не выкатывай плечи вперед." }
                },
                {
                    group: "chest",
                    title: { en: "Low Cable Fly", ru: "Нижнее сведение в кроссовере" },
                    hook: { en: "Cable fly path that travels upward for upper-chest emphasis.", ru: "Сведение по восходящей траектории для акцента на верх груди." },
                    focus: { en: "Lets you bias the clavicular fibers with constant resistance.", ru: "Позволяет сместить работу в ключичную часть груди при постоянном сопротивлении." },
                    cue: { en: "Start low, raise the hands toward upper-chest level, and keep the elbows softly bent.", ru: "Начинай снизу, поднимай рукояти к уровню верхней груди и сохраняй мягкий локоть." }
                },
                {
                    group: "chest",
                    title: { en: "High Cable Fly", ru: "Верхнее сведение в кроссовере" },
                    hook: { en: "Cable fly path that travels downward toward the lower chest.", ru: "Сведение по нисходящей траектории к нижней части груди." },
                    focus: { en: "Useful when you want more lower-chest feel with continuous tension.", ru: "Полезно, когда нужен больший акцент на нижнюю часть груди с непрерывным напряжением." },
                    cue: { en: "Guide the handles down and in, and keep the chest lifted instead of folding inward.", ru: "Веди рукояти вниз и внутрь и держи грудь раскрытой, а не складывайся внутрь." }
                },
                {
                    group: "back",
                    title: { en: "Lat Pulldown", ru: "Вертикальная тяга сверху" },
                    hook: { en: "Main cable pattern for lats and upper-back control.", ru: "Главный блочный паттерн для широчайших и контроля верха спины." },
                    focus: { en: "Great for learning how to pull with the elbows instead of the hands.", ru: "Отлично учит тянуть локтями, а не только руками." },
                    cue: { en: "Pull the elbows down, keep the chest up, and stop the torso from swinging backward.", ru: "Тяни локти вниз, держи грудь высоко и не раскачивай корпус назад." }
                },
                {
                    group: "back",
                    title: { en: "Seated Cable Row", ru: "Горизонтальная тяга сидя" },
                    hook: { en: "Mid-back row with stable resistance through the full pull.", ru: "Горизонтальная тяга для середины спины с ровным сопротивлением на всей амплитуде." },
                    focus: { en: "Useful for teaching scapular control and solid retraction.", ru: "Полезна для контроля лопаток и уверенного сведения в конце тяги." },
                    cue: { en: "Sit tall, pull to the torso, and finish by driving the elbows behind the body.", ru: "Сиди высоко, тяни рукоять к корпусу и заканчивай движение локтями за линией тела." }
                },
                {
                    group: "back",
                    title: { en: "Straight Arm Pulldown", ru: "Тяга прямыми руками" },
                    hook: { en: "Lat isolation with minimal elbow bend.", ru: "Изоляция широчайших с минимальным сгибанием в локте." },
                    focus: { en: "Helps you feel the lats shortening from overhead into the hip line.", ru: "Помогает почувствовать, как широчайшая сокращается из верхней точки к линии таза." },
                    cue: { en: "Keep the elbows only slightly soft and sweep the bar or rope down toward the thighs.", ru: "Оставь локти слегка мягкими и веди рукоять вниз к бедрам широким движением плеча." }
                },
                {
                    group: "legs",
                    title: { en: "Cable Squat", ru: "Присед на нижнем блоке" },
                    hook: { en: "Cable-loaded squat that keeps tension through the whole rise.", ru: "Присед с тягой нижнего блока, который держит напряжение на всем подъеме." },
                    focus: { en: "Can be useful for leg work when you want balance help and steady resistance.", ru: "Полезен для ног, когда нужна подсказка по балансу и ровное сопротивление." },
                    cue: { en: "Sit down between the hips, keep the handles close, and stand through the whole foot.", ru: "Садись между бедрами, держи рукояти ближе к корпусу и вставай через всю стопу." }
                },
                {
                    group: "legs",
                    title: { en: "Cable Kickback", ru: "Отведение ноги назад в кроссовере" },
                    hook: { en: "Direct glute extension against cable resistance.", ru: "Прямое разгибание ягодицы против сопротивления блока." },
                    focus: { en: "Good for glute isolation without loading the spine much.", ru: "Хорошо подходит для изоляции ягодиц без большой осевой нагрузки." },
                    cue: { en: "Brace the torso, keep the pelvis steady, and extend the leg back without turning the low back into the mover.", ru: "Собери корпус, удерживай таз ровно и отводи ногу назад без переработки поясницей." }
                },
                {
                    group: "legs",
                    title: { en: "Cable Leg Curl", ru: "Сгибание ноги на блоке" },
                    hook: { en: "Single-leg hamstring curl with cable tension.", ru: "Сгибание одной ноги на блоке для бицепса бедра." },
                    focus: { en: "Lets you isolate the hamstrings with a stable setup and even resistance.", ru: "Позволяет изолировать бицепс бедра при стабильной постановке и ровном сопротивлении." },
                    cue: { en: "Keep the thigh quiet, curl from the knee, and lower with the same control you used to lift.", ru: "Не болтай бедром, сгибай ногу из колена и опускай ее так же медленно, как поднимал." }
                },
                {
                    group: "shoulders",
                    title: { en: "Cable Lateral Raise", ru: "Подъем руки в сторону на блоке" },
                    hook: { en: "Lateral raise with more constant tension than a dumbbell.", ru: "Подъем в сторону с более постоянным напряжением, чем у гантели." },
                    focus: { en: "Excellent for the middle delt because the cable keeps working from the first centimeter.", ru: "Отлично нагружает среднюю дельту, потому что трос работает с самого начала движения." },
                    cue: { en: "Stand tall, lift through the elbow, and keep the upper trap from taking over too early.", ru: "Стой высоко, веди движение локтем и не давай трапеции слишком рано забирать работу." }
                },
                {
                    group: "shoulders",
                    title: { en: "Face Pull", ru: "Тяга к лицу" },
                    hook: { en: "Rear-delt and upper-back pull for posture and shoulder health.", ru: "Тяга на заднюю дельту и верх спины для осанки и здоровья плеч." },
                    focus: { en: "Helps balance pressing by training external rotation and scapular control.", ru: "Балансирует жимы за счет внешней ротации и контроля лопатки." },
                    cue: { en: "Pull the rope toward the face, flare the hands apart, and finish with the elbows high but controlled.", ru: "Тяни канат к лицу, разводи кисти в стороны и заканчивай локтями высоко, но без рывка." }
                },
                {
                    group: "shoulders",
                    title: { en: "Cable Front Raise", ru: "Подъем перед собой на блоке" },
                    hook: { en: "Front-delt isolation with smooth cable tension.", ru: "Изоляция передней дельты с плавным сопротивлением блока." },
                    focus: { en: "Useful when you need strict front-delt work without the dead zones of a dumbbell.", ru: "Полезно, когда нужна строгая работа передней дельты без мертвых зон, как у гантели." },
                    cue: { en: "Lift to shoulder level, brace the torso, and keep the arm path clean and controlled.", ru: "Поднимай рукоять до уровня плеч, держи корпус собранным и веди руку по чистой траектории." }
                },
                {
                    group: "arms",
                    title: { en: "Cable Curl", ru: "Сгибание рук на блоке" },
                    hook: { en: "Biceps curl with constant cable resistance.", ru: "Сгибание на бицепс с постоянным сопротивлением блока." },
                    focus: { en: "Keeps tension through the full range and makes it harder to relax at the bottom.", ru: "Сохраняет напряжение на всей амплитуде и не дает расслабиться внизу." },
                    cue: { en: "Keep the elbows pinned and curl only as high as you can keep the biceps loaded.", ru: "Зафиксируй локти и поднимай рукоять только до той высоты, где нагрузка все еще остается на бицепсе." }
                },
                {
                    group: "arms",
                    title: { en: "Triceps Pushdown", ru: "Разгибание рук вниз" },
                    hook: { en: "Main cable move for direct triceps work.", ru: "Основное блочное движение для прямой работы на трицепс." },
                    focus: { en: "Useful for adding elbow-extension volume without much joint stress.", ru: "Полезно для набора объема разгибаний без большой нагрузки на суставы." },
                    cue: { en: "Hold the upper arms close to the body and push down by fully extending the elbows.", ru: "Держи плечи ближе к корпусу и разгибай руки вниз именно локтем до полного выпрямления." }
                },
                {
                    group: "arms",
                    title: { en: "Overhead Extension", ru: "Разгибание на блоке из-за головы" },
                    hook: { en: "Cable triceps extension with a strong stretch overhead.", ru: "Блочное разгибание на трицепс с хорошим растяжением над головой." },
                    focus: { en: "Targets the long head well because the arm starts overhead.", ru: "Хорошо включает длинную головку трицепса, потому что рука стартует сверху." },
                    cue: { en: "Keep the elbows pointing forward and extend smoothly without letting them flare apart.", ru: "Направляй локти вперед и разгибай руки плавно, не разводя их широко." }
                },
                {
                    group: "core",
                    title: { en: "Cable Crunch", ru: "Скручивания на блоке" },
                    hook: { en: "Loaded spinal flexion for direct ab work.", ru: "Нагруженное сгибание позвоночника для прямой работы на пресс." },
                    focus: { en: "Lets you train the abs with meaningful resistance and a clear shortened position.", ru: "Позволяет тренировать пресс с ощутимым сопротивлением и ясной конечной точкой сокращения." },
                    cue: { en: "Crunch the ribs toward the pelvis and avoid turning the movement into a hip hinge.", ru: "Подкручивай ребра к тазу и не превращай движение в наклон тазом назад." }
                },
                {
                    group: "core",
                    title: { en: "Woodchopper", ru: "Дровосек на блоке" },
                    hook: { en: "Diagonal cable rotation for the obliques and trunk.", ru: "Диагональное вращение на блоке для косых мышц и корпуса." },
                    focus: { en: "Combines bracing with controlled rotation and works well for athletic trunk patterns.", ru: "Сочетает жесткость корпуса с контролируемым вращением и хорошо подходит для атлетических паттернов." },
                    cue: { en: "Move through the rib cage and hips together and stay balanced through the feet.", ru: "Двигай ребра и таз вместе и держи равновесие через стопы." }
                },
                {
                    group: "core",
                    title: { en: "Pallof Press", ru: "Жим Паллофа" },
                    hook: { en: "Anti-rotation hold and press for trunk stability.", ru: "Антиротационное удержание и жим для стабильности корпуса." },
                    focus: { en: "Teaches the abs to resist turning while the hands move away from the body.", ru: "Учит пресс сопротивляться развороту, пока руки уходят от корпуса." },
                    cue: { en: "Stand tall, press straight out, and do not let the cable pull your torso toward the stack.", ru: "Стой ровно, выжимай рукоять строго вперед и не позволяй тросу разворачивать тебя к блоку." }
                }
            ]
        }
    }
};
