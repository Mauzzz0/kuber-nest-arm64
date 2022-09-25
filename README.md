## Описание

Репозиторий для обучения Kubernetes.  
Шаблон для будущих проектов.

## Команды
`npm ci` - установка зависимостей из package-lock.json  
`npm run start` - старт сервиса на 3000 порту  
`npm run coverage` - запуск деплоя кластера на локальной машине    
`minikube:delete` - полное удаление миникуба  
`minikube:start` - запуск миникуба (driver=docker) и установка ингресса  
`minikube:reinstall` - переустановка миникуба и ингресса  
`minikube:tunnel` - проксирование запросов из 127.0.0.1 внутрь кластера  

## Roadmap
- [X] Базовый деплой кластера
    - [X] Выбор контроллера
      - Из [ingress-nginx](https://github.com/nginxinc/kubernetes-ingress), [ingress-kubernetes](https://github.com/kubernetes/ingress-nginx), [Kong-ingress](), [Traefik](https://github.com/traefik/traefik), [Haproxy](https://github.com/jcmoraisjr/haproxy-ingress) заработал полностью лишь первый (ingress-nginx) 
    - [X] Корректная настройка машины
      - `minikube start --driver=docker` (podman/hyperkit не подходят)
      - `echo "127.0.0.1 domain.com" | sudo tee -a /etc/hosts` (в отличие от "обычных" (не ARM) примеров, нужно писать 127.0.0.1 вместо `minikube ip`)
      - `minikube tunnel` (external ip в lens всегда будет пустым)
    - [X] Деплой минимального nest сервера с доступностью/ответами и без ошибок
      - Не забыть указать `export DOCKER_DEFAULT_PLATFORM=linux/amd64`
- [ ] PostgreSQL
    - [X] Сам чарт k8s [(PR #2)](https://github.com/Mauzzz0/kuber-nest-arm64/pull/2)
    - [ ] Поддержка в NestJS
    - [X] PgAdmin [(PR #5)](https://github.com/Mauzzz0/kuber-nest-arm64/pull/5)
    - (`admin@admin.com` / `admin@admin.com`) ([Вход](.github/images/pgadmin.png))
    - [ ] Автоматическое определение текущего Cluster Ip Address
- [ ] RabbitMQ
    - [X] Сам чарт k8s [(PR #7)](https://github.com/Mauzzz0/kuber-nest-arm64/pull/7)
        - [X] RabbitMQ dashboard [(PR #7)](https://github.com/Mauzzz0/kuber-nest-arm64/pull/7)
    - [ ] Поддержка в NestJS
        - [ ] Сидирование
        - [ ] Декораторы для producer
        - [ ] Декораторы для consumer
        - [ ] Логирование в базу данных время создания и обработки задач
- [ ] Cron
    - [ ] Сам чарт k8s
    - [ ] Логирование в базу данных время вызова джобы
- [ ] Helm
    - [ ] Вынесение переменных в .Values
    - [ ] Использование нескольких реплик и лоад балансеров