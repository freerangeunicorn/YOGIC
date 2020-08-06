"""empty message

Revision ID: d172faaefdd1
Revises: fd389c17eb9d
Create Date: 2020-08-05 15:59:09.496940

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import postgresql

# revision identifiers, used by Alembic.
revision = 'd172faaefdd1'
down_revision = 'fd389c17eb9d'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('yogaclass', 'date')
    op.drop_column('yogaclass', 'time')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('yogaclass', sa.Column('time', postgresql.TIMESTAMP(), autoincrement=False, nullable=False))
    op.add_column('yogaclass', sa.Column('date', sa.DATE(), autoincrement=False, nullable=False))
    # ### end Alembic commands ###
