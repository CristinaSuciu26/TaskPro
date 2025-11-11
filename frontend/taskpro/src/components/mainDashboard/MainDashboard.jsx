import { useEffect, useMemo, useState } from "react";
import {
  AddButton,
  ButtonWrapper,
  CardWrapper,
  Card,
  ColumnContainer,
  ColumnContent,
  ColumnWrapper,
  DashboardWrapper,
  IconsWrapper,
  AnotherCradButtonWrapper,
  CardTitle,
  DescriptionCard,
  CardContent,
  CardDetails,
  CardPriority,
  CardDeadline,
  CardPriorityWrapper,
  CardDeadlineWrapper,
  DeadlineValue,
  PriorityValue,
  CardDetailsWrapper,
  LabelColorHigh,
  LabelColorMedium,
  LabelColorLow,
  LabelColorWithoutPriority,
  LabelPriorityWrapper,
} from "./MainDashboard.styled";
import sprite from "../../assets/icons/sprite.svg";
import { FiPlus } from "react-icons/fi";
import AddColumnModal from "../addColumnModal/AddColumnModal";
import EditColumnModal from "../editColumn/EditColumnModal";
import AddCardModal from "../addCardModal/AddCardModal";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteColumn,
  getColumnsByDashboard,
} from "../../redux/column/columnThunks";
import {
  deleteCard,
  getCardsByColumn,
  updateCard,
} from "../../redux/card/cardThunks";
import { toast } from "react-toastify";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import EditCardModal from "../editCardModal/EditCardModal";
import dayjs from "dayjs";
export default function MainDashboard() {
  const [showColumnModal, setShowColumnModal] = useState(false);
  const [showCreateCardModal, setShowCreateCardModal] = useState(false);
  const [showEditCardModal, setshowEditCardModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedColumn, setSelectedColumn] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);

  const dispatch = useDispatch();
  const selectedDashboardId = useSelector(
    (state) => state.dashboard.selectedDashboardId
  );
  const allColumns = useSelector(
    (state) => state.column.columnsByDashboard || {}
  );
  const cardsByColumn = useSelector((state) => state.card.cardsByColumn || {});

  const columns = useMemo(
    () => allColumns?.[selectedDashboardId] ?? [],
    [allColumns, selectedDashboardId]
  );

  // Refetch columns when dashboard changes
  useEffect(() => {
    if (selectedDashboardId) {
      dispatch(getColumnsByDashboard(selectedDashboardId));
    }
  }, [dispatch, selectedDashboardId]);

  // Fetch cards for each column
  useEffect(() => {
    columns.forEach((col) => {
      dispatch(getCardsByColumn(col._id));
    });
  }, [columns, dispatch]);

  // Combine columns + cards
  const localColumns = useMemo(() => {
    return columns.map((col) => ({
      ...col,
      cards: cardsByColumn[col._id] || [],
    }));
  }, [columns, cardsByColumn]);

  // Edit column
  const handleEditModal = (col) => {
    setShowEditModal(true);
    setSelectedColumn(col);
  };

  // Delete column
  const handleDeleteColumn = async (id) => {
    try {
      await dispatch(deleteColumn(id)).unwrap();
      toast.success("Deleted successfully!");
    } catch (error) {
      toast.error(error || "Delete column failed");
    }
  };

  // Edit card
  const handleEditCardModal = (card, columnId) => {
    setSelectedCard({ ...card, columnId });
    setshowEditCardModal(true);
  };
  // Delete card
  const handleDeleteCard = async (id) => {
    try {
      await dispatch(deleteCard(id)).unwrap();
      toast.success("Deleted successfully!");
    } catch (error) {
      toast.error(error || "Delete column failed");
    }
  };
  // Drag & Drop
  const handleDragEnd = async (result) => {
    const { source, destination } = result;
    if (!destination) return;
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    )
      return;

    const sourceColId = source.droppableId;
    const destColId = destination.droppableId;

    const sourceCards = Array.from(cardsByColumn[sourceColId]);
    const destCards =
      sourceColId === destColId
        ? sourceCards
        : Array.from(cardsByColumn[destColId] || []);

    const [movedCard] = sourceCards.splice(source.index, 1);
    destCards.splice(destination.index, 0, movedCard);

    try {
      // Update card in backend
      await dispatch(
        updateCard({
          id: movedCard._id,
          updates: { columnId: destColId, order: destination.index },
        })
      ).unwrap();

      // Refetch affected columns
      dispatch(getCardsByColumn(sourceColId));
      if (sourceColId !== destColId) dispatch(getCardsByColumn(destColId));
    } catch (error) {
      toast.error("Failed to move card");
    }
  };

  return (
    <>
      <DragDropContext onDragEnd={handleDragEnd}>
        <ColumnContent>
          {localColumns.map((col) => (
            <ColumnContainer key={col._id}>
              <ColumnWrapper>
                <h3>{col.title}</h3>
                <IconsWrapper>
                  <svg
                    width="24"
                    height="24"
                    onClick={() => handleEditModal(col)}
                  >
                    <use xlinkHref={`${sprite}#edit-icon`} />
                  </svg>
                  <svg
                    width="24"
                    height="24"
                    onClick={() => handleDeleteColumn(col._id)}
                  >
                    <use xlinkHref={`${sprite}#trash-icon`} />
                  </svg>
                </IconsWrapper>
              </ColumnWrapper>

              <Droppable droppableId={col._id}>
                {(provided) => (
                  <CardWrapper
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    style={{
                      ...provided.droppableProps.style,
                    }}
                  >
                    {col.cards.map((card, index) => (
                      <Draggable
                        key={card._id}
                        draggableId={card._id}
                        index={index}
                      >
                        {(provided) => (
                          <Card
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            style={{
                              ...provided.draggableProps.style,
                            }}
                          >
                            <CardContent>
                              <CardTitle> {card.title}</CardTitle>
                              <DescriptionCard>
                                {card.description}
                              </DescriptionCard>
                              <svg height="14">
                                <use xlinkHref={`${sprite}#card-line`} />
                              </svg>
                              <CardDetails>
                                <CardDetailsWrapper>
                                  <CardPriorityWrapper>
                                    <CardPriority>Priority</CardPriority>
                                    <PriorityValue>
                                      {card.priority === "high" ? (
                                        <LabelPriorityWrapper>
                                          <LabelColorHigh />
                                          {card.priority
                                            .charAt(0)
                                            .toUpperCase() +
                                            card.priority.slice(1)}
                                        </LabelPriorityWrapper>
                                      ) : card.priority === "medium" ? (
                                        <LabelPriorityWrapper>
                                          <LabelColorMedium />
                                          {card.priority
                                            .charAt(0)
                                            .toUpperCase() +
                                            card.priority.slice(1)}
                                        </LabelPriorityWrapper>
                                      ) : card.priority === "low" ? (
                                        <LabelPriorityWrapper>
                                          <LabelColorLow />
                                          {card.priority
                                            .charAt(0)
                                            .toUpperCase() +
                                            card.priority.slice(1)}
                                        </LabelPriorityWrapper>
                                      ) : (
                                        <LabelPriorityWrapper>
                                          <LabelColorWithoutPriority />
                                          {card.priority
                                            .charAt(0)
                                            .toUpperCase() +
                                            card.priority.slice(1)}
                                        </LabelPriorityWrapper>
                                      )}
                                    </PriorityValue>
                                  </CardPriorityWrapper>
                                  <CardDeadlineWrapper>
                                    <CardDeadline>Deadline</CardDeadline>
                                    <DeadlineValue>
                                      {card.deadline
                                        ? dayjs(card.deadline).format(
                                            "DD MMM YYYY"
                                          )
                                        : "No deadline"}
                                    </DeadlineValue>
                                  </CardDeadlineWrapper>
                                </CardDetailsWrapper>
                                <IconsWrapper>
                                  <svg
                                    width="24"
                                    height="24"
                                    // onClick={() => handleEditModal(col)}
                                    style={{ cursor: "pointer" }}
                                  >
                                    <use xlinkHref={`${sprite}#status-icon`} />
                                  </svg>
                                  <svg
                                    width="24"
                                    height="24"
                                    onClick={() =>
                                      handleEditCardModal(card, col._id)
                                    }
                                    style={{ cursor: "pointer" }}
                                  >
                                    <use xlinkHref={`${sprite}#edit-icon`} />
                                  </svg>
                                  <svg
                                    width="24"
                                    height="24"
                                    onClick={() => handleDeleteCard(card._id)}
                                    style={{ cursor: "pointer" }}
                                  >
                                    <use xlinkHref={`${sprite}#trash-icon`} />
                                  </svg>
                                </IconsWrapper>
                              </CardDetails>
                            </CardContent>
                          </Card>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </CardWrapper>
                )}
              </Droppable>

              <AnotherCradButtonWrapper
                onClick={() => {
                  setSelectedColumn(col);
                  setShowCreateCardModal(true);
                }}
              >
                <AddButton>
                  <FiPlus strokeWidth={1.5} />
                </AddButton>
                <span>Add another card</span>
              </AnotherCradButtonWrapper>
            </ColumnContainer>
          ))}

          {/* Add column button */}
          <ColumnContainer>
            <DashboardWrapper onClick={() => setShowColumnModal(true)}>
              <ButtonWrapper>
                <AddButton>
                  <FiPlus strokeWidth={1.5} />
                </AddButton>
                <span>Add another column</span>
              </ButtonWrapper>
            </DashboardWrapper>
          </ColumnContainer>
        </ColumnContent>
      </DragDropContext>

      {/* Modals */}
      {showColumnModal && (
        <AddColumnModal onClose={() => setShowColumnModal(false)} />
      )}
      {showCreateCardModal && selectedColumn && (
        <AddCardModal
          onClose={() => setShowCreateCardModal(false)}
          columnId={selectedColumn._id}
        />
      )}
      {showEditModal && selectedColumn && (
        <EditColumnModal
          onClose={() => setShowEditModal(false)}
          column={selectedColumn}
        />
      )}

      {showEditCardModal && selectedCard && (
        <EditCardModal
          onClose={() => {
            setshowEditCardModal(false);
            setSelectedCard(null);
          }}
          card={selectedCard}
        />
      )}
    </>
  );
}
