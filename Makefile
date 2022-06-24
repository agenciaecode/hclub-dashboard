# ┌─────────────────────────────────────────────────────────────────────────────┐
# │ Colors definitions                                                          │
# └─────────────────────────────────────────────────────────────────────────────┘
CR=\033[0;31m
CG=\033[0;32m
CY=\033[0;33m
CB=\033[0;36m
RC=\033[0m

# ┌─────────────────────────────────────────────────────────────────────────────┐
# │ Commands                                                                    │
# └─────────────────────────────────────────────────────────────────────────────┘
.PHONY: build
build:
	@docker rm hclub-dashboard 2>/dev/null || true
	@docker rmi hclub-dashboard_image 2>/dev/null || true
	@docker build . -t hclub-dashboard_image
	@docker create --name hclub-dashboard -p 3000:3000 hclub-dashboard_image

.PHONY: stop
stop:
	@docker stop hclub-dashboard

.PHONY: sh
sh:
	@docker exec -it hclub-dashboard sh

.PHONY: start
start:
	@docker start hclub-dashboard

# ┌─────────────────────────────────────────────────────────────────────────────┐
# │ Help                                                                        │
# └─────────────────────────────────────────────────────────────────────────────┘
help:
	@echo ""
	@echo "${CY}Usage:${RC}"
	@echo "   make ${CG}<command>${RC}"
	@echo ""
	@echo "${CY}Infra commands:${RC}"
	@echo "${CG}   build               ${RC}Build all containers"
	@echo "${CG}   start               ${RC}Start all containers"
	@echo "${CG}   stop                ${RC}Stop all containers"
	@echo "${CG}   sh                  ${RC}Enter inside a container"
	@echo ""